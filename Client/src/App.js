import React, { Component } from 'react';
import HomeLayout from './components/home/homeLayout'
var SpotifyWebApi = require('spotify-web-api-node');

var SpotifyAPI = new SpotifyWebApi({
  clientId: '7e00a052d0fc43e5a97d60733cfb52ff',
  clientSecret: 'c1b3da8f0cc04e469e61f5a054982e5b',
  redirectUri: 'http://localhost:3000/'
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeLayout SpotifyAPI={SpotifyAPI}/>
      </div>
    );
  }
}

export default App;
