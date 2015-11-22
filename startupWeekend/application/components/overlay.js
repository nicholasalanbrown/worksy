var React = require('react-native');
var Overlay = require('react-native-overlay');
import Landing from './landing';
import Mentors from './mentors';
import Dumb from './dumb';

var {
  View,
  ActivityIndicatorIOS,
  StyleSheet,
  Text,
} = React;


class MyOverlay extends React.Component{
  render()  {
    return (
      <Overlay isVisible={true}>
        <Dumb />
      </Overlay>
    );
  }
};

let styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
});

module.exports = MyOverlay;
