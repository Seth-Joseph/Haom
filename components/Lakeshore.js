import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import openMap from 'react-native-open-maps';

export default class Movies extends React.Component {
  vps() {
    openMap({ latitude: 9.91920544596578, longitude: 76.31900605433817 });
  }
  aims() {
    openMap({ latitude: 10.034140663805115, longitude: 76.29293965249394 });
  }
  aster() {
    openMap({ latitude: 10.044287658829832, longitude: 76.27785973899898 });
  }
  raja() {
    openMap({ latitude: 10.08787400420174, longitude: 76.38822591200916 });
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
              onPress={() => this.props.navigation.navigate('Hospital')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Please Select</Text>
        </View>
        <View style={styles.try}>
        <TouchableOpacity style={styles.btn} onPress={this.vps}>
          <View style={styles.row}>
            <Text style={styles.text}>VPS Lakeshore Hospital, Kochi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.aims}>
          <View style={styles.row}>
            <Text style={styles.text}>AIMS, Kochi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.aster}>
          <View style={styles.row}>
            <Text style={styles.text}>Aster Medcity, Kochi</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.raja}>
          <View style={styles.row}>
            <Text style={styles.text}>Rajagiri Hospital, Aluva</Text>
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
