
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
          <Image
            style={styles.logo}
            source={require('./logo.png')}
          />
          <Text style={styles.title}>jobtalk</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.navigator.push({
              component: Signup,
              title: 'Signup'
            })
          }}
          >
        <View style={styles.buttonInner}>
          <Icon style={styles.icon} name="social-linkedin-outline" size={50} color='white'/>
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
    fontSize: 42,
    letterSpacing: -2,
    fontWeight: '700',
    marginTop: -10
  },
  content: {
    flex: 1,
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
    left: 10,
    bottom: 0
  },
  logo: {
    marginBottom: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700'
  }
});

module.exports = Landing;
