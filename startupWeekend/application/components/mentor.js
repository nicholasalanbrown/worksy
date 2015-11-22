
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
    let {mentor} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{uri: mentor.avatar}} style={styles.avatar} size={50}/>
          <Text style={styles.name}>{mentor.name}</Text>
        </View>
        <Text style={styles.question}>How long do you want to talk?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>30 minutes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>60 minutes</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.help}>What do you need help with?</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder='Type some highlights here...'
        />
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 80,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
  },
  question: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    fontWeight: '300',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    height: 50,
    margin: 15,
    borderWidth: 1,
    borderColor: Colors.mediumBlue,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  help: {
    color: Colors.mediumBlue,
    fontSize: 28,
    marginTop: 15,
  },
  input: {
    height: 120,
   fontSize: 20,
   borderWidth: 1,
   borderColor: Colors.mediumBlue,
   padding: 8,
   color: 'black',
   backgroundColor: 'white',
   margin: 5,
  },
  submit: {
    padding: 15,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.mediumBlue,
    backgroundColor: Colors.mediumBlue,
  },
})

module.exports = Mentor;
