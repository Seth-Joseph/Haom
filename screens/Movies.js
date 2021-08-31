import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { IconButton} from 'react-native-paper';

export default class Movies extends React.Component {
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
        <View style={styles.try}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Linking.openURL('https://in.bookmyshow.com/')}>
          <View style={styles.row}>
            <Image source={require('../assets/bmy.jpg')} style={styles.img} />
            <Text style={styles.text}>Book My Show</Text>
          </View>
        </TouchableOpacity>
        </View>
        <Text style={styles.blank}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF3F6',
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
  try:{
    alignItems:'center'
  },
  btn: {
    backgroundColor: '#fff',
    width: 350,
    height: 75,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    marginTop: 40,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginTop: 35,
  },
  img: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blank: {
    marginTop: 700,
  },
});
