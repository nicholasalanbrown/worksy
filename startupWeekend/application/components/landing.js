
var React = require('react-native');
import Colors from './colors';
import Signup from './signup';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  StyleSheet,
  TouchableHighlight,
} = React;

class Landing extends React.Component{
  render(){
    return (
      <View style={{flex: 1,}}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to Career Climb</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.props.navigator.push({
                title: 'Signup',
                component: Signup,
                backButtonTitle: 'Back',
              })
            }}
            underlayColor={Colors.mediumBlue}
          >
            <Text style={styles.buttonText}>Sign in with LinkedIn</Text>
          </TouchableHighlight>
        </View>
      </View>

    )
  }
}

let styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.mediumBlue,
  },
  button: {
    padding: 30,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: Colors.aqua,
  },
  title: {
    fontSize: 29,
    color: 'black',
    textAlign: 'center',
  }
})

module.exports = Landing;
