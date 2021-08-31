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

export default class Electric extends React.Component {
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
            <Text style={styles.c}>Select State</Text>
          </View>
          <View style={styles.try}>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL('https://www.apspdcl.in/index.jsp')
              }>
              <Text style={styles.tb}>Andhra Pradesh</Text>
            </TouchableOpacity>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://www.arpdop.gov.in/irj/go/km/docs/internet/ARUNACHAL_PRADESH/Home.html'
                )
              }>
              <Text style={styles.tb}>Arunachal Pradesh</Text>
            </TouchableOpacity>
          </View>
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.apdcl.org/website/')}>
              <Text style={styles.tb}>Assam</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('http://www.bsphcl.co.in/')}>
              <Text style={styles.tb}>Bihar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://www.cspdcl.co.in/cseb/(S(ko1gf01ry4vwc4g3knkjauza))/frmHome.aspx'
                )
              }>
              <Text style={styles.tb}>Chhattisgarh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL('https://www.goaelectricity.gov.in/')
              }>
              <Text style={styles.tb}>Goa</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.gsecl.in/')}>
              <Text style={styles.tb}>Gujarat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.dhbvn.org.in/')}>
              <Text style={styles.tb}>Haryana</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://www.hpseb.in/irj/go/km/docs/internet/New_Website/Pages/Home.html'
                )
              }>
              <Text style={styles.tb}>Himachal Pradesh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://jbvnl.co.in/')}>
              <Text style={styles.tb}>Jharkhand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL('https://bescom.karnataka.gov.in/english')
              }>
              <Text style={styles.tb}>Karnataka</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL('https://www.kseb.in/index.php?lang=en')
              }>
              <Text style={styles.tb}>Kerala</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://portal.mpcz.in/web/')}>
              <Text style={styles.tb}>Madhya Pradesh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://wss.mahadiscom.in/wss/wss_view_pay_bill.aspx'
                )
              }>
              <Text style={styles.tb}>Maharashtra</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://mspcl.in/')}>
              <Text style={styles.tb}>Manipur</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://meecl.nic.in/')}>
              <Text style={styles.tb}>Meghalaya</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://power.mizoram.gov.in/')}>
              <Text style={styles.tb}>Mizoram</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.dopn.gov.in/')}>
              <Text style={styles.tb}>Nagaland</Text>
            </TouchableOpacity>
        
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://pspcl.in/')}>
              <Text style={styles.tb}>Punjab</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://energy.rajasthan.gov.in/content/raj/energy-department/en/home.html'
                )
              }>
              <Text style={styles.tb}>Rajasthan</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://sikkim.gov.in/departments/energy-and-power-department'
                )
              }>
              <Text style={styles.tb}>Sikkim</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.tangedco.gov.in/')}>
              <Text style={styles.tb}>Tamil Nadu</Text>
            </TouchableOpacity>
          
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL('https://www.tssouthernpower.com/')
              }>
              <Text style={styles.tb}>Telangana</Text>
            </TouchableOpacity>
       
            <TouchableOpacity
              style={styles.b}
              onPress={() =>
                Linking.openURL(
                  'https://www.tsecl.in/irj/go/km/docs/internet/TRIPURA/New_Website1/Home.html'
                )
              }>
              <Text style={styles.tb}>Tripura</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.upenergy.in/')}>
              <Text style={styles.tb}>Uttar Pradesh</Text>
            </TouchableOpacity>
         
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.upcl.org/')}>
              <Text style={styles.tb}>Uttarakhand</Text>
            </TouchableOpacity>
        
            <TouchableOpacity
              style={styles.b}
              onPress={() => Linking.openURL('https://www.wbsedcl.in/')}>
              <Text style={styles.tb}>West Bengal</Text>
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
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },

  container1: {
    backgroundColor: '#2A2B31',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 20,
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
  try:{
    alignItems:'center'

  },
  tb: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
