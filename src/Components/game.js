import React from "react";
import Status from "./status";
import Board from "./board"
import {CalculateWinner} from "../Utils/calculateWinner"

class Game extends React.Component {

    constructor(props) {
        super(props)


        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            winningPlayer: null
        }
        // uplift the square's state into the game component.
    }

    whenClicked(i) {
        if (this.state.squares[i] != null)
        {
            return;
        }
        // prevent the same square being set multiple times.

        if (this.state.winningPlayer != null)
        {
            return;
        }
        // prevent the game from continuing if a player has won.

        const squaresCopy = this.state.squares.slice();
        // By copying the square's state into a new object, we are making changes "immutable".
        // This makes otherwise complex features easier to implement, like storing the game's history,
        // since detecting changes between immutable objects is considerably easier than mutable ones.
        // Comparing mutable objects (where we change the object's data directly) is much more involved,
        // requiring traversal of the object's tree and comparison to previous copies of itself.

        squaresCopy[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squaresCopy,
            xIsNext: !this.state.xIsNext,
            winningPlayer: CalculateWinner(squaresCopy)
        });
    }

    render() {
        return (
        <div className="game">
            <Status xIsNext={this.state.xIsNext} winningPlayer={this.state.winningPlayer} />
            <div className="game-board">
            <Board squares={this.state.squares} onClick={(i) => this.whenClicked(i)}/>
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}

export default Game;