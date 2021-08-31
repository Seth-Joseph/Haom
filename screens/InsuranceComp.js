import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import { IconButton} from 'react-native-paper';

export default class InsuranceComp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
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
            onPress={() => Linking.openURL('https://licindia.in/')}>
            <View style={styles.row}>
              <Text style={styles.text}>
                Life Insurance Corporation of India
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL('https://www.maxlifeinsurance.com/')
            }>
            <View style={styles.row}>
              <Text style={styles.text}>Max Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.hdfclife.com/')}>
            <View style={styles.row}>
              <Text style={styles.text}>HDFC Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.iciciprulife.com/')}>
            <View style={styles.row}>
              <Text style={styles.text}>ICICI Prudential Life Insurance</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.tataaia.com/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>Tata AIA Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.bhartiaxa.com/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>Bharti AXA Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL('https://www.bajajallianzlife.com/ ')
            }>
            <View style={styles.row}>
              <Text style={styles.text}>
                Bajaj Allianz Life Insurance Company
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.sbilife.co.in/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>SBI Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Linking.openURL('https://www.reliancenipponlife.com/ ')
            }>
            <View style={styles.row}>
              <Text style={styles.text}>
                Reliance Nippon Life Insurance Company
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.aegonlife.com/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>AEGON Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.avivaindia.com/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>Aviva Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.starhealth.in/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>Star Health Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.kotaklife.com/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>Kotak Life Insurance Company</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => Linking.openURL('https://www.pnbmetlife.com/ ')}>
            <View style={styles.row}>
              <Text style={styles.text}>PNB MetLife Insurance Company</Text>
            </View>
          </TouchableOpacity>
          </View>
          <Text></Text>
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
  text: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginTop: 35,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
