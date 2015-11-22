
var React = require('react-native');
import Mentors from './mentors';
import Colors from './colors';
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

class Signup extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          We just have a few questions about your background to help seekers find you:
        </Text>
        <Text style={styles.question}>
          How many years of experience do you have?
        </Text>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>Select</Text>
          <Text style={styles.next}>{'>'}</Text>
        </View>
        <Text style={styles.question}>
          What are some of your career highlights?
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Type some highlights here...'
        >
        </TextInput>
        <View style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              this.props.navigator.push({
                title: 'Mentors',
                component: Mentors,
                backButtonTitle: 'Back',
              })
            }}
            underlayColor={Colors.mediumBlue}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 120,
  },
  title: {

  },
  instructions: {
    color: 'black',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '400',
  },
  question: {
    marginTop: 30,
    color: Colors.mediumBlue,
    textAlign: 'center',
    fontSize: 22,
    padding: 20,
    fontWeight: '400',
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: '#b4b4b4',
    marginTop: 15,
  },

  input: {
   height: 80,
   padding: 4,
   marginRight: 5,
   fontSize: 23,
   borderWidth: 1,
   borderColor: '#b4b4b4',
   borderRadius: 8,
   color: 'black',
   backgroundColor: Colors.lightBlue
 },
  buttonContainer: {
    backgroundColor: Colors.mediumBlue,
    height: 50,
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
  pickerText: {
    fontSize: 20,
    color: Colors.bodyText,
    margin: 10,
  },
  next: {
    fontSize: 20,
    color: Colors.bodyText,
    margin: 10,
  },
  buttonContainer: {

  },
  button: {

  },
  buttonText: {

  },
})

module.exports = Signup;
