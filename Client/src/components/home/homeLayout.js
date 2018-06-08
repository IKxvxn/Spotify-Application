import React, { Component } from 'react';
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Row, Button, Col} from 'antd'
import * as HomeActions from './homeActions'

class homeLayout extends Component {
      state = {
        token:undefined,        
      }

      render() {
        console.log(this.state)
        this.props.SpotifyAPI.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
          function(data) {
            console.log('Artist albums', data.body);
          },
          function(err) {
            console.error(err);
          }
        );
        return (
          <Row type="flex" justify="center" align="middle" style={{backgroundColor:this.props.Color_Actual,height:"100vh"}} >
            <Col>
              <Button ghost onClick={this.props.cambiarColor}>
                CHANGE COLOR
              </Button>
              <p style={{marginLeft:"2.5rem", color:"#fff"}}>
                {this.props.Color_Actual}
              </p>
            </Col>
          </Row>
        );
      }

      componentWillMount(){
        const queryParser = new URLSearchParams(this.props.location.hash);
        this.setState({token:queryParser.get('#access_token')})
      }

      componentDidMount(){
        if(this.state.token===undefined){this.props.history.push("/401")}
        else{this.props.SpotifyAPI.setAccessToken(this.state.token); this.props.history.push("/")}
      }

      componentWillUnmount(){
      }
    }

    function mapStateToProps(state) {
      return {
        Color_Actual:state.homeReducer.Color_Actual
      }
    }
    
    function mapDispatchToProps(dispatch) {
      return {
        cambiarColor: () => dispatch(HomeActions.cambiarColor())
      }
    }
     
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(homeLayout))

