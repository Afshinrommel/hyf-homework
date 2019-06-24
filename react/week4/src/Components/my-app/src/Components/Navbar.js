import React from 'react'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Bmi from './Bmi';
import ToDoList from './ToDoList';
import GithubUser from './GithubUser';
class Navbar extends React.Component{

    constructor(props){
        super(props)
    }
    render(){

        return(
            <div>
            <ul>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/Bmi">Bmi</a>
                </li>

                <li>
                    <a href="/ToDoList">ToDoList</a>
                </li>

                <li>
                    <a href="/GithubUser">GithubUser</a>
                </li>
            </ul>

        </div>
        )
    }
}
export default Navbar;