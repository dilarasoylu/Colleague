import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import SaveScreen from '../screens/SaveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AssignmentScreen from '../screens/AssignmentScreen';
import PersonScreen from '../screens/PersonScreen';
import UploadScreen from '../screens/UploadScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-home' : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen,
    People: PersonScreen,
    Assignment: AssignmentScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} />
  ),
};

SearchStack.path = '';

const SaveStack = createStackNavigator(
  {
    Save: SaveScreen,
  },
  config
);

SaveStack.navigationOptions = {
  tabBarLabel: 'Save',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark'} />
  ),
};

SaveStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    People: PersonScreen,
    Assignment: AssignmentScreen,
    Upload: UploadScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'} />
  ),
};

ProfileStack.path = '';

const RouteConfigs = {
  HomeStack,
  SearchStack,
  SaveStack,
  ProfileStack,
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Colors.tabIconSelected
  }
}

const tabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

tabNavigator.path = '';

export default tabNavigator;
