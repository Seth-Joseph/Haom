import React from 'react';
import { View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

import HomeScreen from './screens/Homescreen';
import ScanScreen from './screens/Scanner';
import Electric from './screens/Electricity'
import Banking from './screens/Banking';
import Movies from './screens/Movies';
import InsuranceComp from './screens/InsuranceComp';
import PhoneRecharge from './screens/PhoneRecharge';
import Shopping from './screens/Shopping';
import HospitalStates from './screens/HospitalStates';
import Lakeshore from './components/Lakeshore';
import SosScreen from './screens/SosScreen';
import Others from './components/Others';
import Settings from './components/Settings';
import Travels from './screens/Travels';

export default function App() {
  return (
    <View >
      <AppContainer/>
    </View>
  );
}

const switchnavigator = createSwitchNavigator({
  HomeScreen:{screen:HomeScreen},
  Scan:{screen:ScanScreen},
  Elect:{screen:Electric},
  Bank:{screen:Banking},
  Movie:{screen:Movies},
  Insurance:{screen:InsuranceComp},
  Phone:{screen:PhoneRecharge},
  Shop:{screen:Shopping},
  Sos:{screen:SosScreen},
  Hospital:{screen:HospitalStates},
  Lake:{screen:Lakeshore},
  Other:{screen:Others},
  Setting:{screen:Settings},
  Travel:{screen:Travels},
})

const AppContainer = createAppContainer(switchnavigator)