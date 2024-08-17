import React, { useState } from 'react';
import Square from './Square';
import './Board.css';

const Board = () => {
    const [squares, setSquare] = useState(Array(9).fill(null));

    const handleClick = (i) => {
        const newSquares = squares.slice(); //null로 가득찬 squares배열을 얕은 복사함
        newSquares[i] = 'X'; //얕은 복사본의 배열의 인자값 인덱스를 X로 변경
        setSquare(newSquares);
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
