
function Status(props) {

    if (props.winningPlayer != null)
    {
        return <div className="status">Player {props.winningPlayer} has won!</div>;
    }
    
    return <div className="status">Next player: {props.xIsNext ? 'X' : 'O'}</div>;
}

export default Status;