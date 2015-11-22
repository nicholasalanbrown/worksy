var React = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './colors';
import Mentor from './mentor';
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

class Profile extends React.Component{
  render(){
    let {mentor} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{uri: mentor.avatar}} style={styles.avatar} size={50}/>
          <Text style={styles.name}>{mentor.name}</Text>
          <Text style={styles.from}>from</Text>
          <Text style={styles.price}>${mentor.price}</Text>
          <View style={styles.separator}></View>
          <Text style={styles.profileData}>{mentor.company}</Text>
          <Text style={styles.profileData}>{mentor.position}</Text>
          <Text style={styles.profileData}>{mentor.industry}</Text>
          <Text style={styles.about}>About Me</Text>

        </View>
        <TouchableOpacity style={styles.submit}
          onPress={() => {
            this.props.navigator.push({
              component: Mentor,
              title: 'Mentor',
              passProps: {mentor: this.props.mentor}
            });
          }}
        >
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
    flexDirection: 'column',
    padding: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
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
  from: {},
  price: {},
  separator: {},
  profileData: {},
  about: {},
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

module.exports = Profile;
