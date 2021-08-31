import React from 'react';
import { StyleSheet, Text, View, ScrollView,Linking } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default class Others extends React.Component {
  nen() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:112';
    } else {
      number = 'tel:112';
    }
    Linking.openURL(number);
  }
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
  ambulance() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:102';
    } else {
      number = 'tel:102';
    }
    Linking.openURL(number);
  }
  dms() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:108';
    } else {
      number = 'tel:108';
    }
    Linking.openURL(number);
  }
  wh() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:1091';
    } else {
      number = 'tel:1091';
    }
    Linking.openURL(number);
  }
  ah() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:1031';
    } else {
      number = 'tel:1031';
    }
    Linking.openURL(number);
  }
  rw() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:139';
    } else {
      number = 'tel:139';
    }
    Linking.openURL(number);
  }
  ch() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:1098';
    } else {
      number = 'tel:1098';
    }
    Linking.openURL(number);
  }
  bb() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:07966772377';
    } else {
      number = 'tel:07966772377';
    }
    Linking.openURL(number);
  }
  lpg() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:1906';
    } else {
      number = 'tel:1906';
    }
    Linking.openURL(number);
  }
  ra() {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:1073';
    } else {
      number = 'tel:1073';
    }
    Linking.openURL(number);
  }
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
                onPress={() => this.props.navigation.navigate('Sos')}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>National Emergency Number</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.nen}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Police</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.police}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Fire</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.fire}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Ambulance</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.ambulance}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Disaster Management Services</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.dms}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Women Helpline</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.wh}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Anti-Corruption Helpline</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.ah}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Railway Enquiry</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.rw}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Child Helpline</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.ch}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Blood bank Information</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.bb}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>LPG emergency helpline number</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.lpg}
                raised></Icon>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={styles.text}>Road Accident Emergency Service</Text>
            </View>
            <View style={styles.column}>
              <Icon
                name="phone"
                color="green"
                type="font-awesome"
                onPress={this.ra}
                raised></Icon>
            </View>
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
    paddingTop: 50,
  },
  text: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
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
});
