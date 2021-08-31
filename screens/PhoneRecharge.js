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

export default class PhoneRecharge extends React.Component {
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
          onPress={() => Linking.openURL('https://www.jio.com/')}>
          <View style={styles.row}>
            <Image source={require('../assets/j.png')} style={styles.img} />
            <Text style={styles.text}>Jio</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Linking.openURL('https://www.airtel.in/')}>
          <View style={styles.row}>
            <Image source={require('../assets/ai.png')} style={styles.img1} />
            <Text style={styles.text}>Airtel India</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Linking.openURL('https://www.myvi.in/')}>
          <View style={styles.row}>
            <Image source={require('../assets/vi.png')} style={styles.img2} />
            <Text style={styles.text}>Vodafone India</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Linking.openURL('https://www.bsnl.co.in/')}>
          <View style={styles.row}>
            <Image source={require('../assets/b.jpg')} style={styles.img3} />
            <Text style={styles.text}>BSNL Mobile</Text>
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
    width: 40,
    height: 40,
    marginRight: 20,
  },
  img1: {
    width: 45,
    height: 45,
    marginRight: 20,
  },
  img2: {
    width: 70,
    height: 70,
  },
  img3: {
    width: 100,
    height: 50,
    marginRight: 20,
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
