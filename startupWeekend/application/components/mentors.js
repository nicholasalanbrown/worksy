
var React = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from './colors';
import people from './people';
import Mentor from './mentor';
import Profile from './profile';
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

class Mentors extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      })
      .cloneWithRows(people)
    }
  }
  _renderRow(rowData, rowID){
    let len = [];
    for (var i=0; i<rowData.starRating; i++) {
      len.push(i);
    }
    let stars = len.map((star) => {
      return <Text>INSERT STAR HERE</Text>
    })
    return (
      <TouchableOpacity style={styles.mentorContainer}
        onPress={() => {
          this.props.navigator.push({
            component: Profile,
            title: 'Profile',
            passProps: {mentor: rowData}
          });
        }}
        >
        <Image source={{uri: rowData.avatar}} style={styles.avatar} />
        <View style={styles.mentorData}>
          <Text style={styles.name}>{rowData.name}</Text>
          <Text style={styles.company}>{rowData.company}</Text>
          <View style={styles.starContainer}>
            {stars}
          </View>
          <Text style={styles.stars}>{rowData.starRating}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.name}>from</Text>
          <Text style={styles.price}>${rowData.price}</Text>
        </View>
        <TouchableHighlight style={styles.selectButton}>
          <Text style={styles.nextButton}>{'>'}</Text>
        </TouchableHighlight>
      </TouchableOpacity>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort by:</Text>
          <View style={styles.sortButtonContainer}>
            <TouchableHighlight style={styles.ratingButton}>
              <Text style={styles.buttonText}>Rating</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.priceButton}>
              <Text style={styles.buttonText}>Price</Text>
            </TouchableHighlight>
          </View>
        </View>
        <ListView
          style={{flex: 1,}}
          automaticallyAdjustContentInsets={false}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
        />
      </View>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mediumBlue,
  },
  sortContainer: {
    marginTop: 60,
    height: 100,
    backgroundColor: 'white',
  },
  sortText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  sortButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ratingButton: {
    padding: 15,
    backgroundColor: Colors.mediumBlue,
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
  },
  priceButton: {
    padding: 15,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.mediumBlue,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
  },
  mentorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    height: 60,
  },
  mentorData: {
    flex: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    flex: 1,
  },
  name: {},
  company: {},
  stars: {},
  price: {},
  selectButton: {},
  nextButton: {},
  starContainer: {
    flexDirection: 'row',

  }
})

module.exports = Mentors;
