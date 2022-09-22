
function Status(props)
{
    if (props.gameOver)
    {
        if (props.winningPlayer != null)
        {
            return <div className="status">Player {props.winningPlayer} has won!</div>;
        }

        return <div className="status">Game Over</div>;
    }
    
    return <div className="status">Next player: {props.xIsNext ? 'X' : 'O'}</div>;
}

export default Status;
