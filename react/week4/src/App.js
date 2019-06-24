import React from 'react';

import ReactDOM from 'react-dom';
import {Route, BrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Range from './Components/Range';
import Output from './Components/Output';
import Bmi from './Components/Bmi';
import ToDoList from './Components/ToDoList';
import GithubUser from './Components/GithubUser';
import "./App.css";
var uuid = require('uuid');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            id: uuid.v1(),
            name: "",
            answer: {
                q1: "",
                q2: "",
                q3: "",
                q4: ""
            },
            submitted: false
        }
        this.handleQuestionChange = this
            .handleQuestionChange
            .bind(this);
    }
    handleSubmit(event) {
        var name = this.refs.name.value;
        this.setState({
            name: name
        }, () => {
            console.log(this.state)
        })

        event.preventDefault();
    }
    handleQuestionSubmit() {}
    handleQuestionChange(event) {
        if (event.target.name === "q1") {
            var answer = this.state.answer;
            answer.q1 = event.target.value;
        } else if (event.target.name !== "q1") {
            console.log(event.target.value)
        }

        this.setState({
            answer: answer
        }, () => {
            console.log(this.state)
        })
    }
    render() {
        var user;
        var question;
        if (this.state.name && this.state.submitted === false) {
            user = <h2>welcome to {this.state.name}</h2>
            question = <span>
                <h3>survey Question</h3>
                <form
                    onSubmit={this
                    .handleQuestionSubmit
                    .bind(this)}>
                    <div>
                        <label>What is your favorite operating system?
                        </label>
                        <br></br>
                        <input
                            type="radio"
                            name="q1"
                            value="windows"
                            onChange={this.handleQuestionChange}/>Windows<br/>
                        <input
                            type="radio"
                            name="q1"
                            value="Linux"
                            onChange={this.handleQuestionChange}/>Linux<br/>
                        <input
                            type="radio"
                            name="q1"
                            value="Ubuntu"
                            onChange={this.handleQuestionChange}/>Ubuntu<br/>
                        <input type="radio" name="q1" value="Mac" onChange={this.handleQuestionChange}/>Mac<br/>
                    </div>

                </form>
            </span>
        } else if (!this.state.name && this.state.submitted === false) {
            user = <span>
                <h2>please enter your name to begin survey</h2>
                <form
                    onSubmit={this
                    .handleSubmit
                    .bind(this)}>
                    <input type="text" placeholder="type something" ref="name"></input>
                </form>
            </span>
            question = ""
        } else if (this.state.submitted === true) {}
        return (
            <div className="App">
                <div className="App-header">
                    <h2 className="App-header">Survey</h2>
                </div>
                {user}
                <div className="container">
                    {question}
                </div>
                <div>
                    <BrowserRouter>
                        <div>
                            <Navbar />
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/Contact" component={Contact}></Route>
                            <Route path="/About" component={About}></Route>
							<Route path="/Bmi" component={Bmi}></Route>
                            <Route path="/ToDoList" component ={ToDoList}></Route>
                            <Route path="/GithubUser" component ={GithubUser}></Route>
                        </div>
                    </BrowserRouter>
                </div>

            </div>
        )
    }
}
export default App;