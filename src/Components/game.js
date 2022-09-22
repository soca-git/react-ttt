import React from "react";
import NewGame from "./newGame";
import Status from "./status";
import Board from "./board"
import MoveHistory from "./moveHistory";
import { calculateWinner } from "../Utils/utils"

const initialState = {
    history: [{ squares: Array(9).fill(null) }],
    xIsNext: true,
    winningCombination: null,
    winningPlayer: null,
    moveNumber: 0
};

class Game extends React.Component
{
    constructor(props) {
        super(props);

        this.state = initialState
        // Uplifted the square's state into the game component.
    }

    refreshState() {
        this.setState(initialState);
    }

    isGameOver()
    {
        if (this.state.winningCombination != null || this.state.history.length > 9)
        {
            return true;
        }

        return false;
    }

    jumpTo(move) {
        this.setState({
            moveNumber: move
        });
        // We can traverse the game's history by setting the moveNumber state.
        // This causes a re-rendering of the board, with the board's squares property
        // passed as history[moveNumber]. 
    }

    calculateWinner(squares)
    {
        var winningCombination = calculateWinner(squares);
        if (winningCombination != null)
        {
            this.state.winningPlayer = squares[winningCombination[0]];
        }
        
        return winningCombination;
    }

    whenClicked(i) {
        const history = this.state.history.slice(0, this.state.moveNumber + 1);
        const currentSquares = this.state.history[history.length - 1].squares;
        const currentSquaresCopy = currentSquares.slice();
        // By copying the square's state into a new object, we are making changes "immutable".
        // This makes otherwise complex features easier to implement, like storing the game's history,
        // since detecting changes between immutable objects is considerably easier than mutable ones.
        // Comparing mutable objects (where we change the object's data directly) is much more involved,
        // requiring traversal of the object's tree and comparison to previous copies of itself.

        if (currentSquares[i] != null)
        {
            return;
        }
        // Prevent the same square being set multiple times.

        if (this.isGameOver())
        {
            return;
        }
        // Prevent the game from continuing if the game is over.

        currentSquaresCopy[i] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{squares: currentSquaresCopy}]),
            // concat() doesn't mutate the original history array, like push().
            xIsNext: !this.state.xIsNext,
            winningCombination: this.calculateWinner(currentSquaresCopy),
            moveNumber: history.length,
        });
    }

    render() {
        return (
        <div className="game">
            <Status xIsNext={this.state.xIsNext} winningPlayer={this.state.winningPlayer} gameOver={this.isGameOver()} />
            <Board squares={this.state.history[this.state.moveNumber].squares} onClick={(i) => this.whenClicked(i)} winningSquares={this.state.winningCombination} />
            <MoveHistory history={this.state.history} jumpTo={(step) => this.jumpTo(step)} gameOver={this.isGameOver()} />
            <NewGame gameOver={this.isGameOver()} onClick={() => this.refreshState()} />
        </div>
        );
    }
}

export default Game;
