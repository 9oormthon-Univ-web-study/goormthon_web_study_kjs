// @ts-nocheck
import React, { useState } from 'react';
import Board from './components/Board';

export default function App() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xIsNext, setXIsNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]; // 승자가 나오는 모든 경우의 수를 배열로 나타냄

        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let gameStatus;

    if (winner) {
        gameStatus = 'Winner: ' + winner;
    } else {
        gameStatus = `다음에 둘 사람은 ${xIsNext ? 'X' : 'O'}`;
    }

    const handleClick = (i) => {
        const newSquares = current.squares.slice();
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setHistory([...history, { squares: newSquares }]);
        setXIsNext((prev) => !prev);
    };

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={(i) => handleClick(i)} />
                {/* handleClick함수가 인자를 필요로하기 때문에 이 형식으로 전달 */}
            </div>
            <div className="game-info">{gameStatus}</div>
        </div>
    );
}
