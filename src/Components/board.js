import React from "react";
import Square from "./square";

class Board extends React.Component {

    constructor(props) {
        super(props);
        // in js classes, always need to call the parent (super) class constructor.

        console.log(props);
        // props is saved as a property of this object when the object is initialized.

        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true
        }
        // uplift the square's state into the parent(board) component.
    }

    logClick(i) {
        console.log(`clicked square ${i}!`);
    }

    whenClicked(i) {
        if (this.state.squares[i] != null)
        {
            return;
        }
        // prevent the same square being set multiple times.

        this.logClick(i);

        const squaresCopy = this.state.squares.slice();
        // By copying the square's state into a new object, we are making changes "immutable".
        // This makes otherwise complex features easier to implement, like storing the game's history,
        // since detecting changes between immutable objects is considerably easier than mutable ones.
        // Comparing mutable objects (where we change the object's data directly) is much more involved,
        // requiring traversal of the object's tree and comparison to previous copies of itself.

        squaresCopy[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squaresCopy,
            xIsNext: !this.state.xIsNext
        }); 
    }

    renderSquare(i) {
        return <Square number={i} value={this.state.squares[i]} onClick= {() => this.whenClicked(i)} />;
    }

    render() {
        const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

        return (
        <>
            <div className="status">{status}</div>
            <div className="board">
                <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
                </div>
                <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
                </div>
                <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
                </div>
            </div>
        </>
        );
    }
}

export default Board;