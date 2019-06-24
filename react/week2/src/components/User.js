import React from 'react';
class User extends React.Component {
  render(){
      return(
        <div>
          <li>
              id = {this.props.id}
              <br/>
              task ={this.props.body}
               <br/>
               date= {this.props.date}
               <br/>
               <button onClick={this.props.delete}>Delete </button>
               <hr/>
              </li>
        </div>  
      )
  }
 }
 
 export default User;