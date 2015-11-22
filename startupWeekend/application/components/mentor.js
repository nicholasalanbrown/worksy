
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
          <Image source={{uri: mentor.avatar}} style={styles.avatar} size={50}/>
          <Text style={styles.name}>{mentor.name}</Text>
        </View>
        <Text style={styles.question}>How long do you want to talk?</Text>
        <View style={styles.sortButtonContainer}>
          <TouchableHighlight style={styles.ratingButton}>
            <Text style={styles.ratingButtonText}>30 minutes</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.priceButton}>
            <Text style={styles.buttonText}>60 minutes</Text>
          </TouchableHighlight>
        </View>

        <Text style={styles.help}>What do you need help with?</Text>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder='Type some highlights here...'
        />
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              console.log('PRESS');
              this.props.openModal();
            }}
          >
              <Text style={styles.submitButtonText}>Contact this Mentor</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  submitButton: {
    padding: 30,
  },
  submitButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  submitButtonContainer: {
    backgroundColor: Colors.mediumBlue,
    height: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  sortContainer: {
    marginTop: 60,
    marginBottom: 5,
    backgroundColor: 'white',
    borderColor: Colors.mediumBlue
  },
  sortText: {
    fontSize: 20,
    color: Colors.mediumBlue,
    padding: 30,
    textAlign: 'center',
  },
  sortButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ratingButton: {
    flex: 0.5,
    padding: 15,
    margin: 20,
    backgroundColor: Colors.mediumBlue,
    borderWidth: 0,
    borderRadius: 8,
    borderColor: 'black',
    height: 50,
  },
  priceButton: {
    flex: 0.5,
    padding: 15,
    height: 50,
    margin: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.mediumBlue,
    backgroundColor: 'white',
  },

  ratingButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    marginLeft: 10,
    fontWeight: '300',
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
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
   height: 120,
   borderRadius: 4,
   fontSize: 20,
   borderWidth: 1,
   borderColor: Colors.mediumBlue,
   padding: 8,
   flex: 1,
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
