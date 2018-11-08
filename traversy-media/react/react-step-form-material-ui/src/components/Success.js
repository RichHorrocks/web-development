import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
  render () {
    return(
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Subimission</h1>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success;
