import {View, Text} from 'react-native';
import React from 'react';
import ComingSoon from '../Screens/BottomTabs/ComingSoon';
import Home from '../Screens/BottomTabs/Home';
import Search from '../Screens/BottomTabs/Search';
import Downloads from '../Screens/BottomTabs/Downloads';
import More from '../Screens/BottomTabs/More';

const TanNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="ComingSoon" component={ComingSoon} />
      <Tab.Screen name="Downloads" component={Downloads} />
      <Tab.Screen name="ComingSoon" component={ComingSoon} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  );
};

export default TanNavigator;
