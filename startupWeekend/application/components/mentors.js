
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
      <TouchableOpacity style={styles.mentorContainer}
        onPress={() => {
          let self = this;
          this.props.navigator.push({
            component: Profile,
            title: rowData.name,
            passProps: {mentor: rowData, openModal: self.props.openModal}
          });
        }}
        >
        <Image source={{uri: rowData.avatar}} style={styles.avatar} />
        <View style={styles.mentorData}>
          <Text style={styles.name}>{rowData.name}</Text>
          <Text style={styles.company}>{rowData.company}</Text>
          <View style={styles.starContainer}>
            {stars}
            {emptyStars}
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${rowData.price}</Text>
        </View>
        <TouchableHighlight style={styles.selectButton}>
          <Icon style={styles.arrow} name="ios-arrow-right" size={15} color={Colors.inactive}/>
        </TouchableHighlight>
      </TouchableOpacity>
    )
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.sortContainer}>
          <Text style={styles.sortText}>Sort 121 mentors by:</Text>
          <View style={styles.sortButtonContainer}>
            <TouchableHighlight style={styles.ratingButton}>
              <Text style={styles.ratingButtonText}>Rating</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.priceButton}>
              <Text style={styles.buttonText}>Price</Text>
            </TouchableHighlight>
          </View>
        </View>
        <ListView
          style={styles.listView}
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
    backgroundColor: Colors.mediumBlue,
    borderWidth: 0,
    borderColor: 'black',
    height: 50,
  },
  priceButton: {
    flex: 0.5,
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
  ratingButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  mentorContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray
  },
  listView: {
    padding: 0,
    margin: 0
  },
  mentorData: {
    flex: 2,
  },
  avatar: {
    marginLeft: 10,
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    fontSize: 17,
    fontWeight: '500'
  },
  company: {
    fontSize: 15,
    paddingVertical: 4,
    color: Colors.companyText
  },
  arrow: {
    marginLeft: 15
  },
  stars: {},
  price: {
    fontSize: 32,
    color: Colors.mediumBlue,
    fontWeight: '300'
  },
  selectButton: {},
  nextButton: {},
  starContainer: {
    flexDirection: 'row',

  }
})

module.exports = Mentors;
