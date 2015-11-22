
var React = require('react-native');
import Colors from './colors';
import people from './people';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} = React;



class Mentors extends React.Component{
  render(){
    return (
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <View style={styles.sortContainer}>
          <Text>Sort by:</Text>
          <View></View>
        </View>
      </View>
    )
  }
}

module.exports = Mentors;
