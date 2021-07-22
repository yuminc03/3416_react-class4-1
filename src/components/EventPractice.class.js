//클래스형 컴포넌트로 구현한 EventPractice
//state에 input값 담기
import React, { Component } from 'react';

class EventPractice extends Component{
    state = {
        username: ''
    };
    render() {
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input 
                type="text" 
                name="username" 
                placeholder="사용자이름"
                value={this.state.username}
                onChange={(e) => {this.setState({
                    username: e.target.value
                })
              }}
            />
            <button onClick={() => {
                alert(this.state.username);
                this.setState({
                    username: ''
                });
            }}>확인</button>
            </div>
        );
    }
}

export default EventPractice;