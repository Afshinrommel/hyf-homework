import React from 'react'
import  '../App.css';
class GitHub extends React.Component {
    constructor(props) {
        super(props)

        this.userArray = "";
        this.state = {
            name: "",
            submitForm: false,
            userNameApi: []
        }

        this.handleSubmit = this
            .handleSubmit
            .bind(this);

    }

    handleSubmit = (event) => {
        var name = this.refs.name.value;
        event.preventDefault();
        this.setState({name: name});
        var that = this;
     // `https://api.github.com/search/users?q=${input}`
     //   var url = `https:/api.github.com/users/${name}`
        var url = `https://api.github.com/search/users?q=${name}`
		fetch(url).then(function (response) {
            return (response.json())
        })
            .then(function (getUserApi) {
                let userApiX = JSON.stringify(getUserApi);
                let userArray = JSON.parse(userApiX);
                var backUpArray = [].concat(that.state.userNameApi);
                backUpArray.push(userArray)
                that.setState({userNameApi: backUpArray})
                //   console.log(userArray);    return(userArray)
            })

        that.setState({submitForm: true});
    }
    // deleteItem =()=>{
    //     var backUpArray = [].concat(this.state.userNameApi);
    //     <button className="buttondelete" onClick={this.deleteItem.bind(this)}>deleteAll</button>
    //     backUpArray.splice(0,backUpArray.length)
    //     this.setState({userNameApi: backUpArray})
    //     this.setState({name:""})
    // }

    render() {

        if (this.state.submitForm === true) {

            console.log(this.state.userNameApi)

        }

        return (
            <span>
                <div>
                    <h3>search user</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label>input username=</label>
                        <input type='text' placeholder="Type user name and Press Enter" ref="name"></input>
                      
                    </form>
                    <ul>
                        {this
                            .state
                            .userNameApi
                            .map((item, index) => {
                                return (
                                    <li key={index}>
                                        id ={item.id}<br />
                                        bio ={item.bio}<br />
                                        email ={item.email}<br />
                                        events_url ={item.events_url}<br />
                                        node_id ={item.node_id}<br />
                                        followers ={item.followers}<br />
                                        following ={item.following}<br />
                                        avatar_url ={item.avatar_url}<br />
                                        starred_url ={item.starred_url}<br />
                                        site_admin ={item.site_admin}<br />
                                        public_repos ={item.public_repos}<br />
                                        avatar_url ={item.avatar_url}</li>
                                )
                            })}
                    </ul>

                </div>
            </span>
        )
    }

}
export default GitHub;

// passTime = false; let newPromise = new Promise(function (resolve, reject) {
// setTimeout(() => { console.log("time is passed") }, 10000) setTimeout(() => {
//         passTime = true;      //   let text = "time is passed";
// resolve(passTime)     }, 7000)     if (passTime === false) {         let
// message = new Error('time is not reached') reject(message)     } })
// newPromise     .then(() => { console.log('Called after 3 seconds')     })
// .catch(error => console.log(error.message))