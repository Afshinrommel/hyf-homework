import React from 'react';
import {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import List from './Components/List';
import "./styles.css";

var uuid = require('uuid');
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            filterText: "",
            items: [],
            requestState: "search a user name"
        }
        this.deleteItem = this.deleteItem.bind(this)
    }
    handleUserInput(searchItem) {
        var that = this;
        that.setState({filterText: searchItem})
        console.log(that.state.filterText)

    }

    handleUserClick() {
        var that = this;
        var name = that.state.filterText
        var url = `https://api.github.com/search/users?q=${name}`
        fetch(url).then(function (response) {

        return(response.json().then(function(body){
            that.setState({items:body.items})
         //   return(body.items)
        }))})
    
    }
    deleteItem(index){
        var that = this;
        var backUpArray = [].concat(that.state.items);
        backUpArray.splice(index, 1);
        that.setState({items: backUpArray})
    }

    render() {
        const {items,deleteItem} = this.state;
        console.log(items)
        return (
            <div>

                <div>

                    <Home
                        filterText
                        ={this.state.filterText}
                        onUserClick
                        ={this
                        .handleUserClick
                        .bind(this)}
                        onUserInput={this
                        .handleUserInput
                        .bind(this)}/>
                </div>
                <div>
                    
                <List items={items} deleteItem ={this.deleteItem}/>
      
            </div>
            </div>
        )
    }

}

export default App;

    // handleUserClick() {
    //     var that = this;
    //     var name = that.state.filterText
    //     var url = `https://api.github.com/search/users?q=${name}`
    //     fetch(url).then( 
    //         response =>
    //         response.json().then(body => {
    //           if (body.message === "Not Found") {
    //             alert("user not found");
    //             this.setState({ requestState: "user not found" });
    //           } else {
    //             this.setState({
    //               items: body.items,
    //               requestState: "done"
    //             });
    //           }
    //         })
    //     );
    // }