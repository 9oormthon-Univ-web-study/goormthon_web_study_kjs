import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
    //공유 state를 상위 컴포넌트인 Board에서 관리하므로 전에 내용 지움

    render() {
        //함수형 컴포넌트가 아닌 인자를 받지 않은 class형 컴포넌트에서는 this.props로 받은 props에 접근할 수 있음
        //어떻게 접근할 수 있냐?? React 내부에서 임의로 `Square.props = props;`라고 선언을 해주었음
        return (
            <button onClick={() => this.props.onClick()} className="square">
                {this.props.value}
            </button>
        );
    }
}
