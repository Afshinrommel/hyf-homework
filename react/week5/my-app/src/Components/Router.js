import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';
import App from '..//App';
 
import UserProfile from './UserProfile'

class Router extends React.Component{

render(){

    return(

        <BrowserRouter>
        <Route path="/" exact component={App} />
        <Route path="/:user_name" exact component={UserProfile} />
      </BrowserRouter>
    )
}

}
export default Router;
