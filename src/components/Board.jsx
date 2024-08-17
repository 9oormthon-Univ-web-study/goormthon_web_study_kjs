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

    handleClick(i) {
        const squares = this.state.squares.slice(); //null로 가득찬 squares배열을 얕은 복사함
        squares[i] = 'X'; //얕은 복사본의 배열의 인자값 인덱스를 X로 변경
        this.setState({
            squares: squares,
        });
    }

    render() {
        return (
            <div>
                <div className="status">다음에 둘 사람은 X냐 O냐를 표시해줄 곳</div>
                <div className="board-row">
                    <Square value={this.state.squares[0]} onClick={() => this.handleClick(0)} />
                    <Square value={this.state.squares[1]} onClick={() => this.handleClick(1)} />
                    <Square value={this.state.squares[2]} onClick={() => this.handleClick(2)} />
                </div>
                <div className="board-row">
                    <Square value={this.state.squares[3]} onClick={() => this.handleClick(3)} />
                    <Square value={this.state.squares[4]} onClick={() => this.handleClick(4)} />
                    <Square value={this.state.squares[5]} onClick={() => this.handleClick(5)} />
                </div>
                <div className="board-row">
                    <Square value={this.state.squares[6]} onClick={() => this.handleClick(6)} />
                    <Square value={this.state.squares[7]} onClick={() => this.handleClick(7)} />
                    <Square value={this.state.squares[8]} onClick={() => this.handleClick(8)} />
                </div>
            </div>
        );
    }
}
