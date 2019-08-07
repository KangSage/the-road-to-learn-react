import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        let helloWorld = '리액트에 오신 여러분을 환영합니다';
        const user = {};
        user.firstname = 'KANG';
        user.lastname = 'SAGE';
        return (
            <div className="App">
                <h2>{helloWorld}</h2>
                <p>my name is {user.firstname} {user.lastname}</p>
            </div>
        );
    }
}

export default App;
