import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Route, Switch} from 'react-router-dom'
import HomeLayout from './components/home/homeLayout'
import WelcomeLayout from './components/welcome/welcomeLayout'
var SpotifyWebApi = require('spotify-web-api-node');

var SpotifyAPI = new SpotifyWebApi({
  clientId: '7e00a052d0fc43e5a97d60733cfb52ff',
  clientSecret: 'c1b3da8f0cc04e469e61f5a054982e5b',
  redirectUri: 'http://localhost:3000/'
});

class App extends Component {
  renderHome = () =>{ return <HomeLayout SpotifyAPI={SpotifyAPI} />}
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/home' render={this.renderHome}/>
          <Route component={WelcomeLayout} />
        </Switch>
      </div>
    );
  }
  
  componentWillMount(){
    if(window.location.pathname!=='/home'){window.history.replaceState(null, null, "/");}
  }
}

export default withRouter(App)
