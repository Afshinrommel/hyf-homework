import React from 'react';
class Create extends React.Component {

    render() {
        return (
            <div>
                <li>
                
                    id= {this.props.id}
                    <br/>
                    Date= {this.props.Task}
                    <br/>
                    Task ={this.props.Date}
                    <br/>
                    <button onClick={this.props.delete}>Delete </button>
                    <br/>
                    <button onClick={this.props.edit}>Edit</button>
                </li>
            </div>
        )

    }
}

export default Create;