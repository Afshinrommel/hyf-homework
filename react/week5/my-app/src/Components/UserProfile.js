import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';
import "../styles.css";
class UserProfile extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: ""
        }
    }

    componentDidMount() {
        var that = this;
        var name = that.props.match.params.user_name;
        var url = `https://api.github.com/users/${name}`
        fetch(url).then(function (response) {

            return (response.json().then(function (body) {
                that.setState({userName: body})
            }))
        })

    }

    //     componentDidMount() {         let userName =
    // this.props.match.params.user_name; let url =""
    // fetch(`https://api.github.com/users/${user}`)           .then(response =>
    // response.json())           .then(body => this.setState({ user: body }));  }

    render()
    
    {

        return (
          
            <table>
                <thead>
                    <tr>
                        <th>UserId</th>
                        <th>User</th>
                        <th>Name</th>
                        
                        <th>public_gists</th>
                        <th>public_repos</th>

                        {console.log(this.state.userName)}
                        <th>type</th>
                        <th>Location</th>
                        <th>Picture</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={this.state.userName.id}>
                        <td>{this.state.userName.id}</td>
                        <td>{this.state.userName.login}</td>
                        <td>{this.state.userName.name}</td>
                        <td>{this.state.userName.public_gists}</td>
                        <td>{this.state.userName.public_repos}</td>
                        <td>{this.state.userName.type}</td>
                        <td>{this.state.userName.location}</td>
                        <td>
                            <img src={this.state.userName.avatar_url} alt="pic"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        )}}

        export default UserProfile;
