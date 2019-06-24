import React,{Component} from 'react'
//import FaPencil from 'react-icons/lib/fa/pencil'
//import FaTrash from 'react-icons/lib/fa/trash'
//import { FaPencil } from 'react-icons/fa'
import {FaRegTrashAlt} from 'react-icons/fa'
import {FaPencilAlt} from 'react-icons/fa'
import {FaRegEdit} from 'react-icons/fa'
import {FaRegSave} from 'react-icons/fa'

class Note extends React.Component{
    constructor(props){
        super(props)
        this.state={
            editing:false
        }
        this.edit = this.edit.bind(this);
        this.remove = this.remove.bind(this);
        this.renderForm = this.renderForm.bind(this);
        this.renderDisplay = this.renderDisplay.bind(this);
        this.save = this.save.bind(this);
    }
edit(){
 //   alert('edit note');
 this.setState({
     editing:true
 })
}
save(){
    alert(this._newText.value)
}
remove(){
    alert('remove note');
}

renderForm(){
return(<div className = "note">
<form>
    <textarea ref={input=>this._newText = input}/>
    <button onClick = {this.save}><FaRegSave /></button>
</form>

</div>)
    
}
    renderDisplay(){
return(
    <div className='note'>
    <p>{this.props.children}</p>
    <span>
    <button onClick={this.edit}><FaPencilAlt /></button>
    <button ><FaRegTrashAlt /></button>
    <button onClick={this.remove}><FaRegEdit /></button>
    </span>
    </div>
)
        
    }

render(){

    return this.state.editing ? this.renderForm():this.renderDisplay();
    // if(this.state.editing){
    //     return(this.renderForm())
    // }else{
    //     return(
    //         this.renderDisplay()
    //     )
    // }
}

}
export default Note
//onChange={e => this.handleChange(e)}
//medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56