
function MoveHistory(props)
{
    if (!props.gameOver)
    {
        return;
    }

    const moves = props.history.map((move, moveNumber) => {
        
        const description = moveNumber ? `${moveNumber}` : `0`;

        return (
            <button key={moveNumber} className="board-state" onClick={() => props.jumpTo(moveNumber)}>{description}</button>
        );
    });
    // Here, we map the history array of board states to a list element containing a button.
    // Mapping is a handy way to transform data into UI elements.

    return (
        <div className="game-info">
            <div>Board States:</div>
            <div className="board-states">{moves}</div>
        </div>
    );
}

export default MoveHistory;
