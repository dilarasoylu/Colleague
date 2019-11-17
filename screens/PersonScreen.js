import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'
import { PeopleThumbnail } from '../components/Thumbnails';

import Colors from '../constants/Colors';

import Images from '../constants/Images';
import logged_user_uuid  from '../data/login_information.js'



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
    if (this.props.uuid == logged_user_uuid){
      displayIcon ='ios-settings'
    }
    else{
      displayIcon = 'ios-mail'
    }

    return (
      <View style={styles.container}>
          <View style={styles.pictureView}>
          		<View style={styles.rowItem}>
	          	    <Avatar rounded size='large' source={{
	    				uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'
	    			}}/>
	    		</View>
    			<View style={styles.rowItem}>
	          	    <View style={styles.personDetails}>
		          	    <Text style={styles.name}>{this.props.name}</Text>
		              	<Text style={styles.position}>{this.props.position}</Text>
		              	<Text style={styles.institution}>{this.props.institution}</Text>
                    <Text style={styles.institution}>{this.props.institution}</Text>
                    <Text> logged_user_uuid</Text>

		            </View>
		        </View>
		        <View style={styles.rowItem}>
		        	<Ionicons name={displayIcon} size={32} color={Colors.mainThemeColor} />
	            </View> 
          </View>
          <ButtonGroup
		      onPress={this.updateIndex}
		      selectedIndex={selectedIndex}
		      buttons={buttons}
		      containerStyle={styles.buttonContainer}
          buttonStyle={styles.buttons}
          selectedTextStyle={styles.selectedText}
          selectedButtonStyle={styles.selectedButton}
          innerBorderStyle={{color: 'white'}}
          textStyle={{fontSize: 12, fontWeight: '700'}}
  		  />
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
  pictureView: {
  	marginLeft: 10,
  	marginRight: 10,
  	flexDirection: 'row',
  	justifyContent: 'space-around',
  	alignItems: 'center'
  },
  personDetails: {
    flexDirection: 'column',
  	marginLeft: 10,
  	marginRight: 10,
  },
  rowItem: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  feed: {
  	alignItems: 'center',
  },
  rectangle1: {
  	height: 130,
  	width: 380,
  	backgroundColor: 'red',
  	margin: 10
  },
  rectangle2: {
  	height: 130,
  	width: 380,
  	backgroundColor: 'blue',
  	margin: 10
  },
  name:{
    fontSize:22,
    color: Colors.mainThemeColor,
    fontWeight: '600',
  },
  position:{
    fontSize:16,
  },
  institution:{
    fontSize:16,
  },
  buttons:{
    borderBottomColor: Colors.mainThemeColor,
  },
  selectedButton:{
    backgroundColor: Colors.mainThemeColor,
  },
  selectedText:{
    color: 'white',
  },
  buttonContainer: {
    borderColor: 'white',
    height: 40, 
    marginLeft:10, 
    marginRight:10
  },
  scrollViewContainer: {
    paddingHorizontal: 20
  }

});