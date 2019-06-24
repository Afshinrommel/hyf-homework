import React from 'react';
import uniqueId from 'react-html-id';
import ReactDOM from 'react-dom';

import User from './components/User';

class App extends React.Component {
    constructor() {
        super();
        this.userId = 0
        this.state = {
            userArray: [],
            body: "",
            date: "",
            id: ""
        }

    }
    deleteEvent = (index) => {
        let backUpUserArray = Object.assign([], this.state.userArray)
        backUpUserArray.splice(index, 1);
        this.setState({userArray: backUpUserArray})
    }

    setUser = (e) => {
        this.setState({Body: e.target.value})
    }

    setDate = (e) => {
        this.setState({Date: e.target.value})
    }

    addTask = () => {
        this.userId = this.userId + 1;
        let backUpUserArray = Object.assign([], this.state.userArray)
        backUpUserArray.push({id: this.userId, body: this.state.Body, date: this.state.Date})
        this.setState({userArray: backUpUserArray})
    }

    render() {
        return (
            <div>
                <input type="text" placeholder = "Type Task here.." onBlur={this.setUser}/>
                <input type="text" placeholder = "Type Date here.." onBlur={this.setDate}/>
                <button onClick={this.addTask}>
                    Add Task</button>
                <ul>
                    {this
                        .state
                        .userArray
                        .map((user, index) => {
                            return (<User
                                key={user.id}
                                id
                                ={user.id}
                                body={user.body}
                                date={user.date}
                                delete={this
                                .deleteEvent
                                .bind(this, index)}/>)
                        })
}
                </ul>

            </div>
        )
    }
}

export default App;