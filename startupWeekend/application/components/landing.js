
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

class Landing extends React.Component{
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>THIS IS THE LANDING</Text>
      </View>
    )
  }
}

module.exports = Landing;
