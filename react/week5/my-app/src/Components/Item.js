import React from 'react';
import "../styles.css";
import { Link } from "react-router-dom";
class Item extends React.Component{
 
render(){

    let { item,deleteItem,index } = this.props;
    return(       
        <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.type}</td>
        <td>
        <Link to={"/" + item.login}>{item.login}</Link>

        </td>
        <td>{item.score}</td>
        <td>
          <img src={item.avatar_url} alt="pic" />
        </td>
      <button onClick={()=>{deleteItem(index)}}>deleteItem</button>
      </tr>

    )
}
    
}
export default Item;