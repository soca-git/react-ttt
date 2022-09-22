
function MoveHistory(props)
{
    if (!props.gameOver)
    {
        return;
    }

    const moves = props.history.map((move, moveNumber) => {
        
        const description = moveNumber ? `Go to move ${moveNumber}` : `Go to game start`;

        return (
            <li key={moveNumber}>
                <button onClick={() => props.jumpTo(moveNumber)}>{description}</button>
            </li>
        );
    });
    // Here, we map the history array of board states to a list element containing a button.
    // Mapping is a handy way to transform data into UI elements.

    return (
        <div className="game-info">
            <ul>{moves}</ul>
        </div>
    );
}

export default MoveHistory;
