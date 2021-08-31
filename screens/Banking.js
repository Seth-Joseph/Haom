import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import { IconButton } from 'react-native-paper';

export default class Banking extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#EDF3F6' }}>
            <View style={styles.container1}>
              <IconButton
                icon="arrow-left"
                color="white"
                size={50}
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
            onPress={() =>
              Linking.openURL('https://www.dbs.com/in/index/default.page')
            }>
            <View style={styles.row}>
              <Image
                source={require('../assets/dbs.png')}
                style={styles.img1}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.southindianbank.com/')}>
            <View style={styles.row}>
              <Image
                source={require('../assets/sib.jpg')}
                style={styles.img1}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.csb.co.in/ ')}>
            <View style={styles.row}>
              <Image
                source={require('../assets/csb.png')}
                style={styles.img1}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.icicibank.com/ ')}>
            <View style={styles.row}>
              <Image source={require('../assets/ic.png')} style={styles.img1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.hdfcbank.com/ ')}>
            <View style={styles.row}>
              <Image source={require('../assets/h.png')} style={styles.img1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL('https://www.kotak.com/en/home.html ')
            }>
            <View style={styles.row}>
              <Image source={require('../assets/k.png')} style={styles.img2} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.axisbank.com/ ')}>
            <View style={styles.row}>
              <Image source={require('../assets/a.png')} style={styles.img1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.onlinesbi.com/ ')}>
            <View style={styles.row}>
              <Image
                source={require('../assets/sbi.png')}
                style={styles.img1}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.federalbank.co.in/ ')}>
            <View style={styles.row}>
              <Image source={require('../assets/f.png')} style={styles.img1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.saraswatbank.com/ ')}>
            <View style={styles.row}>
              <Image source={require('../assets/s.png')} style={styles.img1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.sc.com/en/ ')}>
            <View style={styles.row}>
              <Image source={require('../assets/sc.png')} style={styles.img1} />
            </View>
          </TouchableOpacity>
          <Text></Text>
          </View>
        </ScrollView>
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
  img1: {
    width: 150,
    height: 50,
  },
  img2: {
    width: 200,
    height: 50,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
