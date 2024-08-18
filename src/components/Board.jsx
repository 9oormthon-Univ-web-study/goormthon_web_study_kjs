import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newSquares = squares.slice(); //null로 가득찬 squares배열을 얕은 복사함
        if (calculateWinnder(squares) || newSquares[i]) {
            return;
        }
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquare(newSquares);
        setXIsNext((prev) => !prev);
        //함수형 업데이트라고 부름, setState는 비동기적으로 발생하기 때문에 이전의 값을 전달받지 못함,
        //setState함수는 현재 상태를 인수로 받는 함수를 인수로 취하고 새로운 상태를 return하기 때문에 위와 같은 형태로 작성이 가능함
    };

    const calculateWinnder = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]; //승자가 나오는 모든 경우의 수를 배열로 나타냄

        for (let index = 0; index < lines.length; index++) {
            const [a, b, c] = lines[index];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinnder(squares);

    let gameStatus;

    if (winner) {
        gameStatus = 'Winner' + winner;
    } else {
        gameStatus = `다음에 둘 사람은 ${xIsNext ? 'X' : 'O'}`;
    }

    return (
        <div>
            <div className="status">{gameStatus}</div>
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)} />
                <Square value={squares[1]} onClick={() => handleClick(1)} />
                <Square value={squares[2]} onClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)} />
                <Square value={squares[4]} onClick={() => handleClick(4)} />
                <Square value={squares[5]} onClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)} />
                <Square value={squares[7]} onClick={() => handleClick(7)} />
                <Square value={squares[8]} onClick={() => handleClick(8)} />
            </div>
        </div>
    );
};

export default Board;
