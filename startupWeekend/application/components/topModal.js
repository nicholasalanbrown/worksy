import React from 'react-native';
import Colors from './colors';
import Icon from 'react-native-vector-icons/Ionicons';
let {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  ListView,
  Animated,
  Dimensions,
  ScrollView,
} = React;

let {
  height: deviceHeight
} = Dimensions.get('window');

class TopModal extends React.Component{
  constructor(props){
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      offset: new Animated.Value(deviceHeight)
    }
  }
  componentDidMount () {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: 0
    }).start();
  }
  closeModal  () {
    Animated.timing(this.state.offset, {
      duration: 300,
      toValue: deviceHeight
    }).start(this.props.closeModal);
  }
  render () {
    return (
        <View style={styles.backdrop}>
        <Animated.View style={[styles.modal, {transform: [{translateY: this.state.offset}]}]}>
          <TouchableOpacity onPress={this.closeModal}  style={styles.icon}>
            <Icon name="close-round" size={40} color='#ffffff'/>
          </TouchableOpacity>
        <View style={styles.heading}>
        </View>
        <View style={styles.commentaryContainer}>
            <Text style={styles.commentaryText}>Success!</Text>
        </View>
        </Animated.View>
        </View>
    )
  }
};

var styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  modal: {
    backgroundColor: Colors.mediumBlue,
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  heading: {
    height: 67,
    marginTop: 100,
    backgroundColor: '#ffffff'
  },
  icon: {
    position: 'absolute',
    top: 40,
    right: 40
  },
  commentaryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  commentaryText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '700',
    lineHeight: 22,
    marginBottom: 50
  }
});

module.exports = TopModal;
