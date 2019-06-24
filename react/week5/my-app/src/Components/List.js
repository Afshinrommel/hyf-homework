import React from 'react';
import Item from './Item';
import "../styles.css";

class List extends React.Component{
 
render(){
    const { items,deleteItem } = this.props;
  //  const {index} = this.state;
    return(
        
        <table>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Type</th>
            <th>Users</th>
            <th>Score</th>
            <th>Picture</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
    //        items.map(item => <Item item={item} deleteItem ={deleteItem} />)
           items.map((item,index) => <Item item={item} index={index }deleteItem ={deleteItem} />)
          ) : (
           <p>User does not exist</p>
          )}
        </tbody>
      </table>
      
    )
}

}
export default List;
