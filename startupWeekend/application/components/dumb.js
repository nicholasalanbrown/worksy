
var React = require('react-native');
import Colors from './colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Signup from './signup';
// var Animatable = require('react-native-animatable');

var {
  // AppRegistry,
  StyleSheet,
  Text,
  Image,
  Animated,
  View,
  // NavigatorIOS,
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} = React;

let {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

class Dumb extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      scale: 1,
      opacity: 1,
    }
  }

  render(){
    return (
      <Animated.View style={[styles.container, {
        opacity: this.state.opacity
      }]}>
      <View style={styles.imageBackground}>
          <Image
            style={styles.image}
            source={require('./background.png')}
          />
      </View>
        <View style={styles.content}>
          <Text style={styles.title}>jobtalk</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Animated.timing(
              this.state.opacity,
              {
                toValue: 0.8,
                duration: 1000,
              }
            ).start();
          }}
          style={styles.btn}>
        <View style={styles.buttonInner}>
          <Icon style={styles.icon} name="social-linkedin-outline" size={50} color='white'/>
          <Text style={styles.btnText}>Sign in with LinkedIn</Text>
        </View>
        </TouchableOpacity>
      </Animated.View>
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
    height: deviceHeight,
    width: deviceWidth,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  image: {
    height: deviceHeight,
    width: deviceWidth,
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

module.exports = Dumb;
