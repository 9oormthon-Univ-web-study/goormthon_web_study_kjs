// @ts-nocheck
import React, { useState } from 'react';
import Board from './components/Board';

export default function App() {
    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xIsNext, setXIsNext] = useState(true);
    const [stepNumber, setStepNumber] = useState(0);

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

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    let gameStatus;

    if (winner) {
        gameStatus = 'Winner: ' + winner;
    } else {
        gameStatus = `다음에 둘 사람은 ${xIsNext ? 'X' : 'O'}`;
    }

    /**
     * 버튼, 각 요소가 클릭되었을 때 호출됨
     * @param {index} i 해당 칸의 인덱스값을 인자로 받음
     * @returns 반환값은 없고 jumpTo함수에 의해 바뀐 stepNumber관련 상태를 변경해줌(history, current)
     */
    const handleClick = (i) => {
        const newHistory = history.slice(0, stepNumber + 1); //History 배열을 step에 따라서 바꿔주고
        const newCurrent = newHistory[newHistory.length - 1]; //현재 배열을 초기화된 History배열에 맞춰줌
        const newSquares = newCurrent.squares.slice(); //승자를 계산하기 위한 newSquares또한 바뀐 값에 바꾸어주고 이 내용들은 화면에 바로 드러나진 않고 아직은 참조용임
        if (calculateWinner(newSquares) || newSquares[i]) {
            return;
        }

        newSquares[i] = xIsNext ? 'X' : 'O';
        setHistory([...newHistory, { squares: newSquares }]);
        setXIsNext((prev) => !prev);

        setStepNumber(newHistory.length);
    };
    /**
     *
     * @param {index} step 인덱스 값을 받으면 stepNumber를 인자로 상태변환해줌
     */
    const jumpTo = (step) => {
        setStepNumber(step); //여기서 stepNumber를 바꾸면 history[stepNumber]를 참조하는 current변수가 리렌더링되니까 내용이 바뀜
        setXIsNext(step % 2 === 0);
    };

    const moves = history.map((step, move) => {
        //map(배열들 중 현재값, 인덱스, 현재 배열)
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board squares={current.squares} onClick={(i) => handleClick(i)} />
                {/* handleClick함수가 인자를 필요로하기 때문에 이 형식으로 전달 */}
            </div>
            <div className="game-info">{gameStatus}</div>
            <ol>{moves}</ol>
        </div>
    );
}
