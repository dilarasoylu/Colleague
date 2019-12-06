import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'

import PersonScreen from '../screens/PersonScreen.js'
import Colors from '../constants/Colors';

import Images from '../constants/Images';

import loggedUserUuid  from '../data/loginData'

import people from '../data/mockPeople'


export default class ProfileScreen extends Component {

    render () {
      return (
          <PersonScreen
            fields={people[0]}
            navigation={this.props.navigation}
          />
      );
    }

}
