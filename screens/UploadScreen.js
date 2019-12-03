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


export default class UploadScreen extends Component {
	constructor(props) {
	  super(props)
		// Example access - console.log(this.props.navigation.getParam('name'))
    this.state = {
      checkedState:{
        accessibilityTypes:{ 'Vision': false,'Hearing': false,'Attention': false},
        contentTypes:{'Assignment': false, 'Handout': false, 'Lecture':false}
      }
    }
   
   
  };


  getBackButton = () =>{
    displayIcon = 'ios-arrow-back'

    return (

    <TouchableOpacity
      onPress={() => {}}>
      <Ionicons name={displayIcon} size={32} color={Colors.mainThemeColor} />

    </TouchableOpacity>
    )
  };

  showAlert = () =>{
      Alert.alert(
        'Upload Complete!',
        'View all your uploads in your profile.',
        [
          {
            text: 'Okay',
            onPress: () => {
              goBack()
            },
            style: 'cancel',
          },
        ],
        {cancelable: false},
      );
    
  }


  getSubmitButton = () =>{
    const {goBack} = this.props.navigation;
    // onPress={() => {goBack()}}>

    return(
    <TouchableOpacity style={styles.submitButton}
    onPress={this.showAlert}>

      <Text style={styles.attachText}>Submit</Text>
    </TouchableOpacity>
    )
  };


  getAttachButton = () =>{
    displayIcon = 'ios-attach'

    return (

    <TouchableOpacity style={styles.attachButton}
      onPress={() => {}}>
      <Text style={styles.attachText}>Attach File</Text>
      <Ionicons name={displayIcon} size={32} color={Colors.whiteComponentColor} />
    </TouchableOpacity>
    )
  };

  
  setOthersUnchecked = (type, typeLabels, newCheckedState)=>{
    for (i = 0; i < typeLabels.length; i++){
      newCheckedState[type][typeLabels[i]] = false
    }
    return newCheckedState
  }

  getCheckBoxes = (type, typeLabels, singleResponse) =>{
    if (singleResponse){
      checkedIcon='dot-circle-o'
      uncheckedIcon='circle-o'
    }else{
      checkedIcon='check-square-o'
      uncheckedIcon='square-o'
    }
    return (
    <View style={styles.checkBoxRow}>
      {
      typeLabels.map((currLabel) => {
        return(
      <CheckBox
          style={styles.checkBoxStyle}
          onPress={()=>{
            newCheckedState = this.state.checkedState
            current = newCheckedState[type][currLabel]
            if(!current && singleResponse){newCheckedState = this.setOthersUnchecked(type, typeLabels, newCheckedState)}
            newCheckedState[type][currLabel]=!current
            this.setState({
              checkedState: newCheckedState
            })
          }}
          checked={this.state.checkedState[type][currLabel]}
          leftText={"CheckBox"}
          containerStyle={{backgroundColor: 'white', borderColor: 
          'white'}}
          checkedIcon={checkedIcon}
          uncheckedIcon={uncheckedIcon}

          title={currLabel}

       />
      )
      }
      )
    }
    </View>
    )
  }

    render() {
      accessibilityTypes = [
        'Vision',
        'Hearing',
        'Attention',
      ];
      contentTypes = [
        'Assignment',
        'Handout',
        'Lecture',
      ];
    return (
    <View>
     <View style={styles.header}>
       
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>Upload a Class Resource</Text>
        </View>
     </View>
     <ScrollView style = {{marginBottom: 45,}}>
       <View style={styles.entry}>
         <Text style={styles.entryTitle}>Title</Text>
          <TextInput style={styles.inputBox}/>
       </View>
        <View style={styles.entry}>
          <Text style={styles.entryTitle}>Description</Text>
          <TextInput style={styles.inputBoxBig}
            multiline={true}
          />
         </View> 
         <View style={styles.entry}>
          <Text style={styles.entryTitle}>Subject</Text>
          <TextInput style={styles.inputBox}/>
        </View>
         <View style={styles.entry}>
          <Text style={styles.entryTitle}>Resource Type: </Text>
          {this.getCheckBoxes('contentTypes', contentTypes, true)}

         </View>
         <View style={styles.entry}>
          <Text style={styles.entryTitle}>Accessibility Needs: </Text>
          {this.getCheckBoxes('accessibilityTypes', accessibilityTypes, false)}
         </View>
         {this.getAttachButton()}
         <View style = {{alignSelf: 'center'}}>
          {this.getSubmitButton()}
        </View>
      </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  mainContainer:{

  },
  header:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title:{
    alignSelf: 'center',
    fontSize: 25,
    color: Colors.mainThemeColor,
    fontWeight: '600',
  },
  entry:{
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  entryTitle:{
    color: Colors.mainThemeColor,
  }, 
  inputBox:{
    height: 40, 
    borderColor: 'white', 
    backgroundColor: Colors.whiteComponentColor,
    marginVertical: 8,
    shadowOffset: {height: 0, width: 0},
    shadowColor: Colors.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 3,
    flexDirection: 'row'
  },
  inputBoxBig:{
    height: 90, 
    borderColor: 'white', 
    backgroundColor: Colors.whiteComponentColor,
    marginVertical: 8,
    shadowOffset: {height: 0, width: 0},
    shadowColor: Colors.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 3,
    flexDirection: 'row'
  },
  wrapTitle:{
    alignItems: 'center',
    flex: 1,
  },
  checkBoxStyle:{
    padding: 10,
    alignItems: 'center',
  },
  checkBoxRow:{
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-evenly',
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
  submitButton:{
    alignItems: 'center',
    backgroundColor: Colors.mainThemeColor,
    height: 45,
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 100,
    justifyContent: 'center'
  },

});
