import React from 'react';
import {PropTypes} from 'react';
import "../styles.css";
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputName: ""
        }
    }

    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }

    handleClick(){
        this.props.onUserClick()
     console.log(this.state.inputName);
    }

    render() {
        return (
            <div>
                <input
                    type="search"
                    placeholder="Username"
                    value={this.props.filterText}
                    onChange
                    ={this
                    .handleChange
                    .bind(this)}/>
                <button
                    onClick={this
                    .handleClick
                    .bind(this)}>Search</button>
            </div>
        )
    }

}

export default Home;
