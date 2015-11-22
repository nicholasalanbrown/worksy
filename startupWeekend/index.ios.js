/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import Landing from './application/components/landing';
import Signup from './application/components/signup';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var startupWeekend = React.createClass({
  render: function() {
    return (
      <View style={{flex: 1,}}>
        <NavigatorIOS
          style={{flex: 1,}}
          initialRoute={{
            component: Signup,
            title: 'Welcome',
          }}
        />
        <Landing/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('startupWeekend', () => startupWeekend);
