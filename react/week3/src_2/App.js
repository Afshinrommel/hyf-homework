import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            error: null,
            userName: "",
            avatar_url: "",
            id: "",
            created_at: "",
            url: "",
            login: "",
            public_repos: "",
            following: "",
            followers: ""

        }
    }
    componentDidMount(user) {
        if (user !== "") {
            this.setState({isLoading: true});
            let url = `https://api.github.com/users/${user}`
            fetch(url).then(response => {
                if (response.ok) {
                    response
                        .json()
                        .then(response => {
                            console.log(response);
                            this.setState({error: null, isLoading: false});
                            this.setState({avatar_url: response.avatar_url})
                            this.setState({id: response.id})
                            this.setState({created_at: response.created_at})
                            this.setState({url: response.url})
                            this.setState({login: response.login})
                            this.setState({public_repos: response.public_repos})
                            this.setState({following: response.following})
                            this.setState({followers: response.followers})
                            return response
                        })
                } else {
                    this.setState({error: "UserName Not Found", isLoading: false});
                    this.setState({avatar_url: null})
                    this.setState({id: null})
                    this.setState({created_at: null})
                    this.setState({url: null})
                    this.setState({login: null})
                    this.setState({public_repos: null})
                    this.setState({following: null})
                    this.setState({followers: null})
                }
            })

        }
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    handleSubmit = () => {
        this.componentDidMount(this.state.userName)
    }
    setUser = (e) => {
        this.setState({userName: e.target.value})
    }
    render() {

        if (this.state.error) {
            return <p>{this.state.error}</p>;
        }

        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <div>
                <label>userName</label>
                <input
                    id="taskInput"
                    type="text"
                    placeholder="Type userName here.."
                    onChange={this.setUser}/>
                <button onClick={this.handleSubmit}>getUser
                </button>

                <p>
  
                    <label>login=</label>
                    {this.state.login}
                    <br/>
                    <label>id=</label>
                    {this.state.id}
                    <br/>
                    <label>url=</label>
                    {this.state.url}
                    <br/>
                    <label>avatar_url=</label>
                    {this.state.avatar_url}
                    <br/>
                    <label>created_at=</label>
                    {this.state.created_at}
                    <br/>
                    <label>following=</label>
                    {this.state.following}
                    <br/>
                    <label>public_repos=</label>
                    {this.state.public_repos}
                    <br/>
                    <label>followers=</label>
                    {this.state.followers}
                </p>

            </div>
        )

    }
}

export default App;
