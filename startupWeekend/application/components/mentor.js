
var React = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './colors';
import people from './people';
var {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  NavigatorIOS,
  Image,
  StyleSheet,
  TouchableHighlight,
  TextInput,
  ListView,
} = React;

class Mentor extends React.Component{
  render(){
    return (
      <View style={{flex: 1, backgroundColor: Colors.mediumBlue}}>
        <Text>MENTOR</Text>
        <Text>{this.props.mentor}</Text>
      </View>
    )
  }
}

module.exports = Mentor;
