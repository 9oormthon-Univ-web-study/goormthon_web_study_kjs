import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null), //this.state = ,,,,,,,,인 상태(null로 가득참)
        };
    }

    render() {
        return (
            <div>
                <div className="status">다음에 둘 사람은 X냐 O냐를 표시해줄 곳</div>
                <div className="board-row">
                    <Square value={this.state.squares[0]} />
                    <Square value={this.state.squares[1]} />
                    <Square value={this.state.squares[2]} />
                </div>
                <div className="board-row">
                    <Square value={this.state.squares[3]} />
                    <Square value={this.state.squares[4]} />
                    <Square value={this.state.squares[5]} />
                </div>
                <div className="board-row">
                    <Square value={this.state.squares[6]} />
                    <Square value={this.state.squares[7]} />
                    <Square value={this.state.squares[8]} />
                </div>
            </div>
        );
    }
}
