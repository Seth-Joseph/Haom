import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { IconButton } from 'react-native-paper';

export default class Travels extends React.Component {
  police() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:100';
    } else {
      number = 'tel:100';
    }
    Linking.openURL(number);
  }
  fire() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:101';
    } else {
      number = 'tel:101';
    }
    Linking.openURL(number);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#EDF3F6' }}>
          <View style={styles.container1}>
            <IconButton
              icon="arrow-left"
              color="white"
              size={40}
              onPress={() => this.props.navigation.navigate('HomeScreen')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Please Select</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                Linking.openURL('https://www.cleartrip.com/flights')}>
              <Image
                source={require('../assets/plane.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Flights</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.btn}   onPress={() =>
              Linking.openURL('http://www.indianrail.gov.in/enquiry/StaticPages/StaticEnquiry.jsp?StaticPage=index.html')}>
              <Image
                source={require('../assets/train.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Railway</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.btn} onPress={() =>
              Linking.openURL('https://www.booking.com/index.html?label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AsLMrYkGwAIB0gIkOWIzYWU2YTItOWRkMy00Yjg5LTkwYzctZDRiYTMxNmU4ZTM22AIF4AIB;sid=dc760796aba2317fd9a311be51439fac')}>
              <Image
                source={require('../assets/hotel.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Hotels</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() =>
                Linking.openURL('https://www.india.gov.in/topics/travel-tourism')}>
              <Image
                source={require('../assets/tourism.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Tourism</Text>
            </TouchableOpacity>
            <Text style={styles.blank}></Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF3F6',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
  },
  container1: {
    backgroundColor: '#2A2B31',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 20,
  },
  title: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 20,
  },
  img: {
    width: 50,
    height: 50,
  },
  btn: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 100,
    height: 100,
    marginLeft: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blank: {
    marginTop: 700,
  },
});
