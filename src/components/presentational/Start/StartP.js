import React, { Component, Fragment } from 'react';
import {} from 'react-native';
import WebView from 'react-native-webview';

class StartP extends Component {
  render () {
    const outs = (
      <Fragment>
        <WebView source={{url: 'https://stage.daabisanswer.com:8887/customer/'}} />
      </Fragment>
    );

    return outs;
  }
}

export default StartP;
