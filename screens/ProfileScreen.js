import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'

import PersonScreen from '../screens/PersonScreen.js'
import Colors from '../constants/Colors';

import Images from '../constants/Images';

import logged_user_uuid  from '../data/login_information.js'

import {people} from '../data/mockPeople.json'

export default function ProfileScreen (props){

    return (

      <View>

        <PersonScreen name={props.name} position={props.position} institution={props.institution} uuid={props.uuid}/>
      </View>
      
    );
}

const styles = StyleSheet.create({
  containter: {
  	flex: 1
  },
});