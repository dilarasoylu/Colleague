import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'

import PersonScreen from '../screens/PersonScreen.js'
import Colors from '../constants/Colors';

import Images from '../constants/Images';

import logged_user_uuid  from '../data/login_information'

import people from '../data/mockPeople'


export default function ProfileScreen (props){

    return (

      <View>
        <PersonScreen name={people[0].name} academic_title={people[0].academic_title} department={people[0].department} institution={people[0].institution} uuid={people[0].uuid}/>

      </View>
      
    );
}

const styles = StyleSheet.create({
  containter: {
  	flex: 1
  },
});