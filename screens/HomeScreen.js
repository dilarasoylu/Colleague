import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'
import { PeopleThumbnail } from '../components/Thumbnails';

import Colors from '../constants/Colors';

import Images from '../constants/Images';
import logged_user_uuid  from '../data/login_information'



export default class PersonScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 2
    }
    this.updateIndex = this.updateIndex.bind(this)
  };

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  };
 
  render() {
    const buttons = ['ALL', 'CLASSROOM', 'ARTICLES', 'TALKS']
    const { selectedIndex } = this.state
    

    return (
      <View style={styles.container}>
        <View style = {styles.topView}>
          <View style = {styles.rowItem}>
            <Image style={styles.logo} source={Images.red}/>
          </View>
          <View style = {styles.rowItem}>
            <Text style={styles.title}>Colleague</Text>
          </View>
        </View>
        
        <ScrollView style={styles.scrollViewContainer}>
          <PeopleThumbnail/>
          <PeopleThumbnail/>
          <PeopleThumbnail/>
          <PeopleThumbnail/>
          <PeopleThumbnail/>
          <PeopleThumbnail/>
        </ScrollView>      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containter: {
    flex: 1
  },  
  topView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  scrollViewContainer: {
    paddingHorizontal: 20
  },  
  rowItem: {
    marginTop: 10,
    marginRight: 10, 
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom:10,
  },
  title: {
    fontSize: 30,
    color: Colors.mainThemeColor,
    fontWeight: '700',
  },



});
