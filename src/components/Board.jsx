import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (i) => {
        const newSquares = squares.slice(); //null로 가득찬 squares배열을 얕은 복사함
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquare(newSquares);
        setXIsNext(!xIsNext);
        // setXIsNext((prev) => prev + 1); setState안에 인자로 함수 넣어서 다루는 법 공부하기
    };

    return (
        <div>
            <div className="status">다음에 둘 사람은 X냐 O냐를 표시해줄 곳</div>
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
