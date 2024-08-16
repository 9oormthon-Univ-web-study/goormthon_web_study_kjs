import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value, //전달받은 value를 사용하려면 props.value로 접근해야함
            //처음에는 `value : props`로 접근하는 실수를 했었음
            //이렇게하면 여러 props를 받더라도 props전체를 value에 지정해준다는 뜻이며
            //props가 갖고싶다면 this.props를 통해서 언제든지 접근이 가능함
        };
    }

    render() {
        //함수형 컴포넌트가 아닌 인자를 받지 않은 class형 컴포넌트에서는 this.props로 받은 props에 접근할 수 있음
        return (
            <button onClick={() => this.setState({ value: 'X' })} className="square">
                {this.state.value}
            </button>
        );
    }
}
