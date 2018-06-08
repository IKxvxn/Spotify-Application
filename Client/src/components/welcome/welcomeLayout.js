import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import {Row, Button, Col} from 'antd'
import * as Colors from '../../assets/colors'

class homeLayout extends Component {
      state = {
        token:undefined,        
      }

      render() {
        return (
          <Row className="welcomeContainer">
            <p className="welcomeTitle">
              <span>M</span>usic-genre
            </p>
            <Button className="welcomeButton" ghost onClick={()=>{window.location = 'http://localhost:8888/'}}>
              LOGIN WITH SPOTIFY
            </Button>
          </Row>
        );
      }
    }

export default withRouter(homeLayout)

