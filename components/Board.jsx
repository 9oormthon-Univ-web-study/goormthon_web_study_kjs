import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends Component {
    render() {
        return (
            <div>
                <div className="status">다음에 둘 사람은 X냐 O냐를 표시해줄 곳</div>
                <div className="board-row">
                    <Square value={1} />
                    <Square value={2} />
                    <Square value={3} />
                </div>
                <div className="board-row">
                    <Square value={4} />
                    <Square value={5} />
                    <Square value={6} />
                </div>
                <div className="board-row">
                    <Square value={7} />
                    <Square value={8} />
                    <Square value={9} />
                </div>
            </div>
        );
    }
}
