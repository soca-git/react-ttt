import React from "react";
import Square from "./square";

class Board extends React.Component
{
    constructor(props) {
        super(props);
        // In js classes, always need to call the parent (super) class constructor.

        console.log(props);
        // props is saved as a property of this object when the object is initialized.
        // This only happens when the site loads. The constructor is not called again during re-rendering, but it's props are updated.
    }

    logClick(i) {
        console.log(`clicked square ${i}!`);
    }
    // Note; the constructor here could be deleted, we aren't using it anymore!

    whenSquareClicked(i) {
        this.logClick(i);
        this.props.onClick(i);
        // Invoke the 'onClick' function passed in from Game,
        // passing 'i', the index of the square, into the onClick function passed down from the parent 'Game' component.
    }

    renderSquare(i) {
        return <Square number={i} value={this.props.squares[i]} onClick= {() => this.whenSquareClicked(i)} winningSquares={this.props.winningSquares} />;
    }

    render() {
        console.log(this.props);
        // The Board component is re-rendered everytime it's parent's (Game) state changes.
        // Notice how the updated props are passed in each time.

        return (
        <>
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
