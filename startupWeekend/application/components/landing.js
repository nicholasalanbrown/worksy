
var React = require('react-native');
import Colors from './colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Signup from './signup';
var {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  NavigatorIOS,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} = React;

let {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

class Landing extends React.Component{
  render(){
    return (
      <View style={styles.container}>
      <View style={styles.imageBackground}>
          <Image
            style={styles.image}
            source={require('./background.png')}
          />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome to Career Climb</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.navigator.push({
              name: 'Home',
            })
          }}
          >
        <View style={styles.buttonInner}>
          <Icon style={styles.icon} name="social-linkedin-outline" size={40} color='white'/>
          <Text style={styles.btnText}>Sign in with LinkedIn</Text>
        </View>
        </TouchableOpacity>
      </View>

    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  image: {
    width: deviceWidth,
    height: deviceHeight
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '300'
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80
  },
  btn: {
    height: 80,
    backgroundColor: Colors.mediumBlue,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  buttonInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    position: 'absolute',
    left: 15,
    bottom: 10
  },
  btnText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  }
});

module.exports = Landing;
