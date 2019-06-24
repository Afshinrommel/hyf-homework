import React from 'react';
import  '../App.css';
var uuid = require('uuid');

class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            task: "",
            taskDate: [],
            showDateEdit: "hidden",
            showTaskEdit: "hidden",
            id: 0,
            idx: 0

        }
        this.inputTask = this
            .inputTask
            .bind(this);
        this.inputDateOfTask = this
            .inputDateOfTask
            .bind(this)

    }
    inputTask(event) {
        this.setState({task: event.target.value})

    }

    inputDateOfTask(event) {
        this.setState({date: event.target.value})
    }
    addItem = () => {
        //   var id = new Date().getTime()

        this.setState({showTaskEdit: "hidden"})
        this.setState({showDateEdit: "hidden"})
        var obj = {
            id: uuid.v1(),
            idx: uuid.v1(),
            date: this.state.date,
            task: this.state.task,
            showDateEdit: this.state.showDateEdit,
            showTaskEdit: this.state.showTaskEdit
        }

        var backUpArray = [].concat(this.state.taskDate);
        backUpArray.push(obj)
        this.setState({taskDate: backUpArray})
    }
    editTask = (index, itemId) => {

        var backUpArray = [].concat(this.state.taskDate);
        var getTask = backUpArray[index].task;
        document
            .getElementById(itemId)
            .value = getTask
        backUpArray[index].showTaskEdit = "text"
        this.setState({taskDate: backUpArray})
    }

    editDate = (index, itemIdx) => {

        var backUpArray = [].concat(this.state.taskDate);
        var getDate = backUpArray[index].date;
        document
            .getElementById(itemIdx)
            .value = getDate
        backUpArray[index].showDateEdit = "text"
        this.setState({taskDate: backUpArray})
    }

    doneTask = (index, itemId) => {
        console.log(itemId)
        var backUpArray = [].concat(this.state.taskDate);
        var getTask = document
            .getElementById(itemId)
            .value
        backUpArray[index].task = getTask;
        backUpArray[index].showTaskEdit = "hidden"
        this.setState({taskDate: backUpArray})
    }

    doneDate = (index, itemIdx) => {
        console.log(itemIdx)
        var backUpArray = [].concat(this.state.taskDate);
        var getDate = document
            .getElementById(itemIdx)
            .value
        backUpArray[index].date = getDate;
        backUpArray[index].showDateEdit = "hidden"
        this.setState({taskDate: backUpArray})
    }
    deleteItem = (index) => {
        var backUpArray = [].concat(this.state.taskDate);
        backUpArray.splice(index, 1);
        this.setState({taskDate: backUpArray})
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="type task"
                    name="task input"
                    onChange={this.inputTask}></input>
                <input
                    type="text"
                    placeholder="type date"
                    name="date input"
                    onChange={this.inputDateOfTask}></input>
                <button className="button" onClick={this.addItem}>Add Item</button>
                <ul>
                    {this
                        .state
                        .taskDate
                        .map((item, index) => {
                            return (
                                <li key={index}>
                                    task= {item.task}
                                    <input onChange={this.inputTask} id={item.id} type={item.showTaskEdit}></input>
                                    <button
                                        className="editbutton"
                                        onClick={this
                                        .editTask
                                        .bind(this, index, item.id)}>
                                        edit task</button>
                                    <button
                                        className="donebutton"
                                        onClick={this
                                        .doneTask
                                        .bind(this, index, item.id)}>Done</button>

                                    date= {item.date}
                                    <input onChange={this.inputDateOfTask} id={item.idx} type={item.showDateEdit}></input>

                                    <button
                                        className="editbutton"
                                        onClick={this
                                        .editDate
                                        .bind(this, index, item.idx)}>
                                        edit Date</button>
                                    <button
                                        className="donebutton"
                                        onClick={this
                                        .doneDate
                                        .bind(this, index, item.idx)}>Done</button>
                                    <button
                                        className="buttondelete"
                                        onClick={this
                                        .deleteItem
                                        .bind(this, index)}>deleteItem</button>
                                </li>

                            )
                        })}

                </ul>
            </div>

        )
    }
}
export default ToDoList;