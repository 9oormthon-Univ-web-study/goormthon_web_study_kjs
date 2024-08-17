import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
    constructor(props) {
        super(props); //이걸 해주지 않아도 this.props로 render()내부에서 사용할 수 있긴 한데
        //constructor 안에서 this.props를 사용하기 위해선 `super(props)`를 해주어야 함
        //super를 해주면서까지 this.props를 사용하는 이유는 메서드를 정의할 때는 props말고 this.props를 써줘야 호출이 제대로 되기 때문임
        this.state = {
            value: props.value, //전달받은 value를 사용하려면 props.value로 접근해야함
            //처음에는 `value : props`로 접근하는 실수를 했었음
            //이렇게하면 여러 props를 받더라도 props전체를 value에 지정해준다는 뜻이며
            //props가 갖고싶다면 this.props를 통해서 언제든지 접근이 가능함
        };
    }
    //즉 이 위에서는 this.props들 중 value라는 값을 state로 지정해주는 내용인 것임 이제 밑에서부터는 state를 사용해야함.

    render() {
        //함수형 컴포넌트가 아닌 인자를 받지 않은 class형 컴포넌트에서는 this.props로 받은 props에 접근할 수 있음
        //어떻게 접근할 수 있냐?? React 내부에서 임의로 `Square.props = props;`라고 선언을 해주었음
        return (
            <button onClick={() => this.setState({ value: 'X' })} className="square">
                {this.state.value}
            </button>
        );
    }
}
