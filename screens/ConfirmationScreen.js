import React, { Component} from 'react';
import { Alert, View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity, TextInput, Switch} from 'react-native';
import {ButtonGroup, Button, Avatar, CheckBox} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'
import { Linking } from 'react-native'


import Colors from '../constants/Colors';

import Images from '../constants/Images';
import { loggedUserUuid } from '../data/loginData';

import talks from '../data/mockTalks';
import class_resources from '../data/mockClassResources';
import articles from '../data/mockArticles';
import { ArticleThumbnail, ClassResourceThumbnail, PeopleThumbnail, TalkThumbnail } from '../components/Thumbnails';


export default class ConfirmationScreen extends Component {
	constructor(props) {
	  super(props)
		// Example access - console.log(this.props.navigation.getParam('name'))
   
   
  };




  getViewButton = () =>{

    const {goBack} = this.props.navigation;
    // onPress={() => {goBack()}}>
    // onPress={() => {this.props.navigation.navigate('Assignment', fields)}}>

    return(
    <TouchableOpacity style={styles.ViewButton}
      onPress={() => {}}>
      <Text style={styles.attachText}>View Assignment</Text>
    </TouchableOpacity>
    )
  };

  

    render() {

    return (
    <View style = {styles.mainContainer}>
      <Image style={styles.uploadImage} source={Images.uploadSuccess}/>
       <Text style={styles.message}> Upload was successful!</Text>
       {this.getViewButton()}

      </View>
    );
  }
}



const styles = StyleSheet.create({
  mainContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  uploadImage:{
    width: 140,
    height: 140,
  },
  message:{
    alignSelf: 'center',
    fontSize: 25,
    color: Colors.lightGray,
    fontWeight: '600',
    padding: 30,
  },
  attachButton:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.mainThemeColor,
    height: 45,
    borderRadius: 5 ,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 125,
  },
  attachText:{
    color: Colors.whiteComponentColor,
    fontWeight: '700',
    padding: 10,
  },
  ViewButton:{
    alignItems: 'center',
    backgroundColor: Colors.mainThemeColor,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 150,
    justifyContent: 'center'
  },

});
