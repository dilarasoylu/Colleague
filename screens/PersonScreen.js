import React, { Component} from 'react';
import {Alert, View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'
import { Linking } from 'react-native'

import Colors from '../constants/Colors';

import Images from '../constants/Images';
import { loggedUserUuid } from '../data/loginData';

import talks from '../data/mockTalks';
import class_resources from '../data/mockClassResources';
import articles from '../data/mockArticles';
import { ArticleThumbnail, ClassResourceThumbnail, PeopleThumbnail, TalkThumbnail } from '../components/Thumbnails';


export default class PersonScreen extends Component {

  state = {
    selectedIndex: 0,
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  };


  getResourcesbyUUID = (array, uuid) => {
    myUploads = []
    for (let i in array){
      if (array[i].creator_uuid == uuid){
        myUploads.push(array[i])
      }
    }
    return myUploads
  };

  getExperienceTypes = (accessibility_type) => {
    if (accessibility_type.length == 1) return accessibility_type[0]
    str = ""
    if (accessibility_type.length ==2){
      return str.concat(accessibility_type[0]," & ", accessibility_type[1])
    }
    for (i=0; i<accessibility_type.length-1; i++){
      console.log(str)
      str = str.concat(accessibility_type[i], ', ')
    }
    str = str.concat('& ', accessibility_type[accessibility_type.length-1])
    return str
  }

  thumbnailMatching = {
    Classroom: ClassResourceThumbnail,
    Article: ArticleThumbnail,
    Talk: TalkThumbnail,
    People: PeopleThumbnail
  }

  getResults = (tab, uuid, navigation) => {
    if (tab == 0){
      myUploads = this.getResourcesbyUUID(class_resources, uuid)
      myUploads = myUploads.concat(this.getResourcesbyUUID(talks, uuid))
      myUploads= myUploads.concat(this.getResourcesbyUUID(articles, uuid))
    } else if (tab == 1){
      myUploads = this.getResourcesbyUUID(class_resources, uuid)
    } else if (tab == 2){
      myUploads = this.getResourcesbyUUID(articles, uuid)
    } else if (tab == 3){
      myUploads = this.getResourcesbyUUID(talks, uuid)
    }
    return(
      <View>
      {
        myUploads.map((mockItem) => {
          ThumbnailClass = thumbnailMatching[mockItem['resource_type']]
          return (
            <ThumbnailClass
              navigation={navigation}
              fields={mockItem}/>
          );
        })
      }
    </View>
    )
  };

  getIcon = () =>{
    if (uuid == loggedUserUuid){
      displayIcon = 'ios-settings'
      onIconPress = () => {}
    }
    else{
      displayIcon = 'ios-mail'
      onIconPress = () => {
        Linking.openURL(`mailto:${email}?subject=From Colleague`);
      }
    }
    return (

    <TouchableOpacity
      onPress={onIconPress}>
      <Ionicons name={displayIcon} size={32} color={Colors.mainThemeColor} />

    </TouchableOpacity>
    )
  };

  getAddButton = () =>{
    displayIcon = 'ios-add-circle'
    console.log("add button navigation")
    console.log(this.props.navigation)
    if (this.state.selectedIndex==0){ // && !this.props.navigation){

    return (
    <TouchableOpacity
    //fix the onpress currently not navigating to Upload page
      onPress={() => this.props.navigation.navigate('Upload')}>
      <Ionicons name={displayIcon} size={40} color={Colors.mainThemeColor} />

    </TouchableOpacity>

    )
  }
  };

  render() {

    if(this.props.fields){
      console.log("fields")
      accessibility_type = this.props.fields.accessibility_type
      subjects = this.props.fields.subjects
      uuid = this.props.fields.uuid
      name = this.props.fields.name
      email = this.props.fields.email
      institution = this.props.fields.institution
      academic_title = this.props.fields.academic_title
      department= this.props.fields.department
      profile_image_uri = this.props.fields.profile_image_uri
    }else{
      console.log("navigation")
      accessibility_type = this.props.navigation.getParam('accessibility_type')
      subjects = this.props.navigation.getParam('subjects')
      uuid = this.props.navigation.getParam('uuid')
      name = this.props.navigation.getParam('name')
      email = this.props.navigation.getParam('email')
      institution = this.props.navigation.getParam('institution')
      academic_title = this.props.navigation.getParam('academic_title')
      department= this.props.navigation.getParam('department')
      profile_image_uri = this.props.navigation.getParam('profile_image_uri')
    }

    this.updateIndex = this.updateIndex.bind(this)

    const buttons = ['ALL', 'CLASSROOM', 'ARTICLES', 'TALKS']
    const { selectedIndex } = this.state
    const dict = {
      0: 'all',
      1: 'classroom',
      2: 'articles',
      3: 'talks',
    }

    results = this.getResults(this.state.selectedIndex, uuid, this.props.navigation)
    experienceStr = this.getExperienceTypes(accessibility_type)

    return (
      <View style={styles.container}>
        <View styles={styles.personInformationContainer}>
          <View style={styles.pictureView}>
              <View style={styles.rowItem}>
                  <Avatar rounded size='large' source={{
              uri: profile_image_uri
            }}/>
          </View>
          <View style={styles.rowItem}>
                  <View style={styles.personDetails}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profileDescription}>{academic_title} of {department}</Text>
                    <Text style={styles.profileDescription}>{institution}</Text>
                    <Text style={styles.profileDescription}>Experienced in: {experienceStr}</Text>

                </View>
            </View>
            <View style={styles.rowItem}>
              {this.getIcon()}
              </View>
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
          {results}
        </ScrollView>
        <View style={styles.addButton}>
          {this.getAddButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'column',
    flex: 1
  },
  pictureView: {
    marginLeft: 20,
    marginRight: 20,
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
    marginTop: 15,
    marginBottom: 15,
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
    paddingVertical: 5
  },
  profileDescription:{
    fontSize:16,
    color: Colors.lightGray
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
    paddingHorizontal: 10,
  },
  scrollViewContainer: {
    paddingHorizontal: 20
  },
  personInformationContainer: {
  },
  addButton: {
    alignSelf:'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});
