import React from 'react';
import { StyleSheet, Text, View,Linking,Image } from 'react-native';
import { IconButton } from 'react-native-paper';

export default class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{ backgroundColor: '#fff',alignItems:'center' }}>
            <View style={styles.container1}>
              <View style={styles.row}>
              <View style={styles.column}>
              <IconButton
                icon="arrow-left"
                color="white"
                size={40}
                style={styles.back}
                onPress={() => this.props.navigation.navigate('HomeScreen')}
              />
              </View>
              <View style={styles.column}>
              <IconButton
                icon="information"
                color="white"
                size={40}
                style={styles.info}
                onPress={() => Linking.openSettings()}
              />
              </View>
            </View>
            </View>
            <Image source={require('../assets/icon.png')} style={styles.b} />
            <Text style={styles.title}>Haom</Text>
            <Text style={styles.subtitle}>Household Applications On Mobile</Text>
            <Text style={styles.version}>Version 1.0.1</Text>
          </View>
         <Text style={styles.blank}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    
  },
  container1: {
    backgroundColor: '#2A2B31',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 20,
  },
  blank: {
    marginTop: 800,
  },
  title:{
    fontSize:42,
    marginTop:50,
    textAlign:'center',
    fontWeight:"normal",
    fontFamily:'monospace',
  },
  subtitle:{
    textAlign:'center',
    fontWeight:"normal",
    fontFamily:'monospace',
  },
  version:{
    color:'gray',
    textAlign:'center',
    fontWeight:"normal",
    fontFamily:'monospace',
    marginTop:10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
  },
  back:{
    marginRight:100
  },
  info:{
    marginLeft:100
  },
  b: {
    width: 250,
    height: 250,
    marginTop:50,
    
  },
});
