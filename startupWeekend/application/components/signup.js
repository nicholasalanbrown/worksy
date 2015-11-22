
var React = require('react-native');
import Mentors from './mentors';
import Landing from './landing';
import Colors from './colors';
import MyOverlay from './overlay';
import Dumb from './dumb';
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} = React;

class Signup extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructions}>These questions will help our mentors serve you best:</Text>
        </View>
        <Text style={styles.question}>
          How many years of experience do you have?
        </Text>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>Select</Text>
          <Text style={styles.next}>{'>'}</Text>
        </View>
        <Text style={styles.question}>
          What industry are you looking to work in?
        </Text>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>Select</Text>
          <Text style={styles.next}>{'>'}</Text>
        </View>
        <Text style={styles.question}>
          What career moves are you trying to make?
        </Text>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder='Type something here...'
        >
        </TextInput>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigator.push({
              title: 'Mentors',
              component: Mentors,
              backButtonTitle: 'Back',
            })
          }}
        >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
        </ScrollView>

      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.aqua,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  scrollView: {

  },
  title: {
  },
  instructionContainer: {
    backgroundColor: 'white',
  },
  instructions: {
    color: Colors.aqua,
    padding: 20,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
  },
  question: {
    marginTop: 30,
    color: 'white',
    fontSize: 22,
    padding: 20,
    fontWeight: '400',
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderWidth: 0,
    backgroundColor: 'white',
    marginTop: 15,
  },
  input: {
    height: 120,
   fontSize: 20,
   padding: 8,
   borderColor: 'white',
   color: 'black',
   backgroundColor: 'white',
   marginBottom: 150
 },
  buttonContainer: {
    backgroundColor: Colors.mediumBlue,
    height: 50,
  },
  button: {
    padding: 30,
    marginTop: 120,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  pickerText: {
    fontSize: 20,
    color: Colors.inactive,
    margin: 10,
  },
  next: {
    fontSize: 20,
    color: Colors.inactive,
    margin: 10,
  },
  buttonContainer: {

  },
  button: {
    marginTop: 120,
    height: 80,
    backgroundColor: Colors.mediumBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  },
})

module.exports = Signup;
