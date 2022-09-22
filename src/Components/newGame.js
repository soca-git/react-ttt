
function NewGame(props)
{
    if (props.gameOver)
    {
        return <button className="refresh-button" onClick={() => props.onClick()}>New Game</button>
    }
}

export default NewGame;
