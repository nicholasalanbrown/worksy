/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
import Landing from './application/components/landing';
import Signup from './application/components/signup';
import TopModal from './application/components/topModal';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class startupWeekend extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modal: true
    }
  }
  render() {
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
        {this.state.modal ? <TopModal closeModal={() => this.setState({modal: false}) }/> : null }
      </View>
    );
  }
};

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
