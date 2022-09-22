import { refreshPage } from "../Utils/utils";

function Refresh(props)
{
    if (props.gameOver)
    {
        return <button className="refresh-button" onClick={() => refreshPage()}>New Game</button>
    }
}

export default Refresh;
