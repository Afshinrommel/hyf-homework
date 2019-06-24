import React,{Component} from 'react'
import Note from './Note'
import './index.css';

const ToDoList = [
    {
        task: 'Get out of bed',
        date: 'Wed Sep 13 2017'
    },
    {
        task: 'Brush teeth',
        date: 'Thu Sep 14 2017'
    },
    {
        task: 'Eat breakfast',
        date: 'Fri Sep 15 2017'
    }
];

class Board extends Component {
    constructor(props){
        super(props)
            this.state ={
 
  ToDoList : [
    {
        task: 'Get out of bed',
        date: 'Wed Sep 13 2017'
    },
    {
        task: 'Brush teeth',
        date: 'Thu Sep 14 2017'
    },
    {
        task: 'Eat breakfast',
        date: 'Fri Sep 15 2017'
    }
]
            }
        this.eachNote = this.eachNote.bind(this)
    }

    eachNote(note, i){
return(
    <Note key ={i}
    index ={i} >
    {note.date}{note.task}</Note>

)
    }
    render(){
        return(
            <div className='board'>
 {this.state.ToDoList.map(this.eachNote)}

            </div>
            )
    }
}
export default Board