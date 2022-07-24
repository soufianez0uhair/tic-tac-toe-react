const Initial = ({startGame}) =>{
    return (
        <div className="initial">
            <h2 className="initial__text">Player 1's choice:</h2>
            <div className="choices">
                <span className="choice" onClick={() => startGame(true)}>X</span>
                <span className="choice" onClick={() => startGame(false)}>O</span>
            </div>
        </div>
    )
}

export default Initial;