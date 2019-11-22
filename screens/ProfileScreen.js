import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'

import PersonScreen from '../screens/PersonScreen.js'
import Colors from '../constants/Colors';

import Images from '../constants/Images';

import loggedUserUuid  from '../data/loginData'

import people from '../data/mockPeople'


export default function ProfileScreen (props){

    return (

      <View>

        <PersonScreen fields={people[0]}/>

      </View>

    );
}

const styles = StyleSheet.create({
  containter: {
  	flex: 1
  },
});
