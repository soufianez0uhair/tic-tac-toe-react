import { useEffect, useState } from "react";

import Square from "../components/Square";

const Game = ({isX, handleIsX, handleIsGame}) => {
    const [board, setBoard] = useState(new Array(9).fill(null));

    const squares = new Array(9)

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const [winner, setWinner] = useState('');

    function checkWin() {
        let isOver = false;
        for(let i = 0; i < 8; i++) {
            const a = lines[i][0];
            const b = lines[i][1];
            const c = lines[i][2];
            if(board[a] && board[a] === board[b] && board[a] === board[c]) {
                isOver = true;
                setWinner(isX ? `O is the winner ${emojis[Math.floor(Math.random() * 5)]}!` : `X is the winner ${emojis[Math.floor(Math.random() * 5)]}!`);
            }
        }
        if(!isOver) {
            let isDraw = true;
            for(let i = 0; i < 9; i++) {
                if(!board[i]) {
                  isDraw = false;
                }
            }
            setWinner(isDraw ? `It's a draw ${emojis[5]}` : '');
        }
    }

    function play(i) {
        if(!board[i] && !winner) {
            const updatedBoard = [...board];
            updatedBoard[i] = isX ? 'x' : 'o';
            setBoard(updatedBoard);
            handleIsX();
        }
    }

    useEffect(() => {
        checkWin()
    }, [board]);

    for(let i = 0; i < 9; i++) {
        squares.push(<Square key={i} content={board[i]} play={() => play(i)} />)
    }

    const emojis = ['🥰','🤓','🥳','🥵','😩','🥺'];

    function replay() {
        setBoard(new Array(9).fill(null));
        setWinner('');
        handleIsGame();
    }

    return (
        <div className="game">
            <div className="grid">
                {
                    squares
                }
            </div>
            {winner && <h2 className="game__winner-banner">{winner}</h2> }
            {winner && <button className="btn" onClick={replay} >Replay</button>}
        </div>
    )
}

export default Game;