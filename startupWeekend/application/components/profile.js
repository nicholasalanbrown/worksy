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
    let services = mentor.canHelpWith;
    let len = [];
    for (var i=0; i<mentor.starRating; i++) {
      len.push(i);
    }
    let empty = [];
    let emptyLen = 5 - len.length;
    for (var i=0; i<emptyLen; i++) {
      empty.push(i);
    }
    let emptyStars = empty.map((star) => {
      return <Icon style={styles.icon} name="ios-star-outline" size={25} color={Colors.stars}/>
    })

    let stars = len.map((star) => {
      return   <Icon style={styles.icon} name="ios-star" size={25} color={Colors.stars}/>
    })
    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.header}>
            <View style={styles.avatarContainer}>
              <Image source={{uri: mentor.avatar}} style={styles.avatar} size={100}/>
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{mentor.name}</Text>
              <View style={{flex: 1, flexDirection: 'row'}}>
                {stars}{emptyStars}
              </View>
            </View>
          </View>
          <Text style={styles.from}>from</Text>
          <Text style={styles.price}>${mentor.price}</Text>
          <View style={styles.separator}></View>
          <Text style={styles.profileData}>Company: {mentor.company}</Text>
          <Text style={styles.profileData}>Role: {mentor.position}</Text>
          <Text style={styles.profileData}>Industry: {mentor.industry}</Text>
          <Text style={styles.subHead}>I can help with:</Text>
          <Text style={styles.services}>Interview Prep, Resume Review, General Industry Guidance</Text>
        </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let self = this;
              this.props.navigator.push({
                title: 'Mentor',
                component: Mentor,
                backButtonTitle: 'Back',
                passProps: {mentor: this.props.mentor, openModal: self.props.openModal}
              })
            }}
          >
              <Text style={styles.buttonText}>Contact this Mentor</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container :{
    flex: 1,
    paddingTop: 60,
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20
  },
  buttonContainer: {
    backgroundColor: Colors.mediumBlue,
    height: 100,
  },
  profile: {
    flexDirection: 'column',
    padding: 30,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameContainer: {
    alignItems: 'center',
    padding: 15,
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
    color: Colors.mediumBlue,
    marginTop: 10,
  },
  service: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: Colors.bodyText
  },
  question: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
    fontWeight: '300',
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
  services: {
    textAlign: 'center',
    color: Colors.bodyText,
    fontSize: 18,
    paddingVertical: 4,
    marginBottom: 100
  },
  subHead: {
    textAlign: 'center',
    color: Colors.mediumBlue,
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 20,
    paddingBottom: 6
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

module.exports = Profile;
