import React from 'react';
//import ReactDOM from 'react-dom';
import Create from './createList.js'
class App extends React.Component {
  
    constructor(props) {
        super(props);
        // uniqueId.enableUniqueIds(this)
        this.itemId = 0
        this.state = {
            id :0,
            Date: "",
            Task: "",
            dateTasks: []
        }
    }
    deleteList = (index) => {
        var backUpArray = Object.assign([], this.state.dateTasks)
        backUpArray.splice(index, 1);
        this.setState({dateTasks: backUpArray})
        document.getElementById("dateInput").value = "";
        document.getElementById("taskInput").value = ""; 
    }

    editList = (index) => {
    
        var backUpArray = Object.assign([], this.state.dateTasks)
        var preDateValue = backUpArray[index].Date; 
        var preTaskValue = backUpArray[index].Task; 
        document.getElementById("dateInput").value = preDateValue;
        document.getElementById("taskInput").value = preTaskValue; 

        backUpArray.splice(index, 1);
  
       this.setState({dateTasks: backUpArray})
    }

    setDate = (e) => {
        this.setState({Date: e.target.value})
    }
    setTask = (e) => {
        this.setState({Task: e.target.value})
    }

    setId = () => {
       this.itemId = this.itemId + 1;
     //   this.nextUniqueId();
        this.setState({id:this.itemId})
        // this.setState({id:  this.nextUniqueId()})
    }

    addList = () => {

      this.setId();
        var backUpDateTask = Object.assign([], this.state.dateTasks)
        backUpDateTask.push({id:  this.state.id, Date: this.state.Date, Task: this.state.Task})
        this.setState({dateTasks: backUpDateTask})
       
    }
    render() {
        return (
            <div>
                <label>
                    Date:
                    <input id= "taskInput" type="text" placeholder="Type Date here.." onBlur={this.setTask}/>
                </label>
                Task:
                <input  id= "dateInput" type="text" placeholder="Type Task here.." onBlur={this.setDate}/>
             
                <button onClick={this.addList}>Add List</button>
                <ul>
                    {this
                        .state
                        .dateTasks
                        .map((dateTask, index) => {
                            return (<Create
                                key={dateTask.id}
 
                                id={dateTask.id}
                                Date={dateTask.Date}
                                Task={dateTask.Task}
                                  edit={this
                                    .editList
                                    .bind(this, index)}
                                delete={this
                                .deleteList
                                .bind(this, index)}

/>)
                        })
}
                </ul>

            </div>
        )
    }

}
export default App;
