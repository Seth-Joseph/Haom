import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { IconButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default class HospitalStates extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#EDF3F6' }}>
          <View style={styles.container1}>
            <IconButton
              icon="arrow-left"
              color="white"
              size={40}
              onPress={() => this.props.navigation.navigate('Sos')}
            />
          </View>
        </View>
        <View>
          <Text style={styles.c}>Select State</Text>
        </View>
        <View style={styles.try}>
          <TouchableOpacity
            style={styles.b}
            onPress={() => this.props.navigation.navigate('Lake')}>
            <Text style={styles.tb}>Kerala</Text>
          </TouchableOpacity>
        </View>
        <Icon
          name="exclamation-triangle"
          color="red"
          type="font-awesome"
          style={{ marginTop: 150 }}
        />
        <Text style={styles.msg}>
          Sorry,Currently only Kerala is available
        </Text>
        <Text style={styles.blank}></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF3F6',
  },
  msg: {
    color: 'red',
    textAlign: 'center',
  },
  container1: {
    backgroundColor: '#2A2B31',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 20,
  },
  try:{
    alignItems:'center'
  },
  c: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 20,
  },
  b: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: 200,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    alignItems: 'center',
    marginTop: 20,
  },
  tb: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blank: {
    marginTop: 700,
  },
});
