import React from "react";
import Status from "./status";
import Board from "./board"
import {CalculateWinner} from "../Utils/calculateWinner"

class Game extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
            winningPlayer: null,
            stepNumber: 0
        }
        // uplifted the square's state into the game component.
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step
        });
    }

    whenClicked(i) {
        if (this.state.history[this.state.stepNumber][i] != null)
        {
            return;
        }
        // prevent the same square being set multiple times.

        if (this.state.winningPlayer != null)
        {
            return;
        }
        // prevent the game from continuing if a player has won.

        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const currentSquares = this.state.history[history.length - 1].squares;
        const currentSquaresCopy = currentSquares.slice();
        // By copying the square's state into a new object, we are making changes "immutable".
        // This makes otherwise complex features easier to implement, like storing the game's history,
        // since detecting changes between immutable objects is considerably easier than mutable ones.
        // Comparing mutable objects (where we change the object's data directly) is much more involved,
        // requiring traversal of the object's tree and comparison to previous copies of itself.

        currentSquaresCopy[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{squares: currentSquaresCopy}]),
            mostRecentSquares: currentSquaresCopy,
            // concat() doesn't mutate the original history array, like push().
            xIsNext: !this.state.xIsNext,
            winningPlayer: CalculateWinner(currentSquaresCopy),
            stepNumber: history.length
        });
    }

    render() {
        const history = this.state.history;
        const currentSquares = history[this.state.stepNumber].squares;
        console.log(history);

        const moves = history.map((step, move) => {
            const description = move ? `Go to move ${move}` : `Go to game start`;

            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{description}</button>
                </li>
            );
        });

        return (
        <div className="game">
            <Status xIsNext={this.state.xIsNext} winningPlayer={this.state.winningPlayer} />
            <div className="game-board">
            <Board squares={currentSquares} onClick={(i) => this.whenClicked(i)}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
        );
    }
}

export default Game;