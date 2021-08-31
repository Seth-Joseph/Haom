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

export default class SosScreen extends React.Component {
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
              onPress={() => this.props.navigation.navigate('Hospital')}>
              <Image
                source={require('../assets/hospital.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Hospital</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.btn} onPress={this.police}>
              <Image
                source={require('../assets/police.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Police</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.btn} onPress={this.fire}>
              <Image
                source={require('../assets/fire.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Fire</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.props.navigation.navigate('Other')}>
              <Image
                source={require('../assets/help.png')}
                style={styles.img}
              />
              <Text style={styles.text}>Help Line Numbers</Text>
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
