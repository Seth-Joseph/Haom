import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
  ScrollView,
  SafeAreaView
} from 'react-native';
import { IconButton } from 'react-native-paper';


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeIndex:0,
      carouselItems: [
      {
          title:"Global",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
      {
          title:"Item 4",
          text: "Text 4",
      },
      {
          title:"Item 5",
          text: "Text 5",
      },
    ]
  }
}

_renderItem({item,index}){
    return (
      <View style={{
          backgroundColor:'white',
          borderRadius: 5,
          height: 250,
          padding: 50,
          width:500
          
         }}>
        <Text style={{fontSize: 30}}>{item.title}</Text>
        <Text>{item.text}</Text>
      </View>

    )
}
  render() {
    return (
      <View style={styles.container}>
        
        <ScrollView>
          <View style={{ backgroundColor: '#EDF3F6' }}>
            <View style={styles.container1}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.t}>Welcome</Text>
                </View>
                <View style={styles.column}>
                <IconButton
                icon="cog"
                color="white"
                size={30}
                style={{marginTop:40,marginLeft:70}}
                onPress={() => this.props.navigation.navigate('Setting')}
              />
                </View>
              </View>
            </View>
          </View>
          
         




          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Insurance')}>
                <Image
                  source={require('../assets/insurance.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Insurance</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() =>
                  Linking.openURL(
                    'https://incometaxindia.gov.in/Pages/default.aspx'
                  )
                }>
                <Image
                  source={require('../assets/bag.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Tax</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Elect')}>
                <Image
                  source={require('../assets/eco-house.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Electricity Bill</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Bank')}>
                <Image
                  source={require('../assets/bank.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Banking</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Phone')}>
                <Image
                  source={require('../assets/phone.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Phone Recharge</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Shop')}>
                <Image
                  source={require('../assets/shopping-cart.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Shopping</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Sos')}>
                <Image
                  source={require('../assets/sos.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Emergency</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.b}
                onPress={() => this.props.navigation.navigate('Travel')}>
                <Image
                  source={require('../assets/travel.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb}>Travel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Text style={styles.c}>Others</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.s}
                onPress={() => this.props.navigation.navigate('Movie')}>
                <Image
                  source={require('../assets/movie.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb2}>Movie</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity
                style={styles.s}
                onPress={() => this.props.navigation.navigate('Scan')}>
                <Image
                  source={require('../assets/qr-code.png')}
                  style={styles.pb}
                />
                <Text style={styles.tb2}>Qr Code Scanner</Text>
              </TouchableOpacity>
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
  p: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    margin: 10,
  },
  t: {
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    marginTop: 50,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 20,
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
    paddingTop: 10,
  },
  c: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 20,
  },
  covid:{
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 20,
    marginLeft: 20,
  },
  pb: {
    width: 50,
    height: 50,
  },
  b: {
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
  tb: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  s: {
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
    marginBottom: 100,
  },
  tb2: {
    color: 'black',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
