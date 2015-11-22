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
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image source={{uri: mentor.avatar}} style={styles.avatar} size={40}/>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{mentor.name}</Text>
          </View>
        </View>
          <Text style={styles.from}>from</Text>
          <Text style={styles.price}>${mentor.price}</Text>
          <View style={styles.separator}></View>
          <Text style={styles.profileData}>{mentor.company}</Text>
          <Text style={styles.profileData}>{mentor.position}</Text>
          <Text style={styles.profileData}>{mentor.industry}</Text>
          <Text style={styles.subHead}>I can help with:</Text>
            <View style={styles.separator}></View>
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
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row'
  },
  profile: {
    flexDirection: 'column',
    padding: 30,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:0.3
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.7
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.mediumBlue
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
  from: {
    fontSize: 18,
    textAlign: 'center',
  },
  price: {
    fontSize: 40,
    padding: 4,
    color: Colors.mediumBlue,
    textAlign: 'center'
  },
  separator: {
    height: 2,
    backgroundColor: Colors.lightGray,
    marginBottom: 15
  },
  profileData: {
    textAlign: 'center',
    color: Colors.bodyText,
    fontSize: 18,
    paddingVertical: 4
  },
  subHead: {
    textAlign: 'center',
    color: Colors.mediumBlue,
    fontSize: 20,
    fontWeight: '700',
    paddingVertical: 4
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

module.exports = Profile;
