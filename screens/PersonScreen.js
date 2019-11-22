import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
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
	constructor(props) {
	  super(props)
		// Example access
		console.log(this.props.navigation.getParam('name'))
	  this.state = {
	    selectedIndex: 0
	  }
	  this.updateIndex = this.updateIndex.bind(this)
	};

	updateIndex (selectedIndex) {
	  this.setState({selectedIndex})
	};


  getResourcesbyUUID = (array, uuid) => {
    myUploads = []
    for (let i in array){
      if (array[i].creator_uuid == loggedUserUuid){
        myUploads.push(array[i])
      }
    }
    return myUploads
  };

  thumbnailMatching = {
    Classroom: ClassResourceThumbnail,
    Article: ArticleThumbnail,
    Talk: TalkThumbnail,
    People: PeopleThumbnail
  }

  getResults = (tab, uuid, navigation) => {
    if (tab == 0){
      myUploads = this.getResourcesbyUUID(class_resources, this.props.navigation.getParam('uuid'))
      myUploads = myUploads.concat(this.getResourcesbyUUID(talks, this.props.navigation.getParam('uuid')))
      myUploads= myUploads.concat(this.getResourcesbyUUID(articles, this.props.navigation.getParam('uuid')))
    } else if (tab == 1){
      myUploads = this.getResourcesbyUUID(class_resources, this.props.navigation.getParam('uuid'))
    } else if (tab == 2){
      myUploads = this.getResourcesbyUUID(articles, this.props.navigation.getParam('uuid'))
    } else if (tab == 3){
      myUploads = this.getResourcesbyUUID(talks, this.props.navigation.getParam('uuid'))
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
    if (this.props.navigation.getParam('uuid') == loggedUserUuid){
      displayIcon = 'ios-settings'
			onIconPress = () => {}
    }
    else{
      displayIcon = 'ios-mail'
			onIconPress = () => {
				var email = this.props.navigation.getParam('email')
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


  render() {
  	const buttons = ['ALL', 'CLASSROOM', 'ARTICLES', 'TALKS']
  	const { selectedIndex } = this.state
    const dict = {
      0: 'all',
      1: 'classroom',
      2: 'articles',
      3: 'talks',
    }

    results = this.getResults(this.state.selectedIndex, loggedUserUuid, this.props.navigation)


    return (
      <View style={styles.container}>
				<View styles={styles.personInformationContainer}>
          <View style={styles.pictureView}>
          		<View style={styles.rowItem}>
	          	    <Avatar rounded size='large' source={{
	    				uri: this.props.navigation.getParam('profile_image_uri')
	    			}}/>
	    		</View>
    			<View style={styles.rowItem}>
	          	    <View style={styles.personDetails}>
		          	    <Text style={styles.name}>{this.props.navigation.getParam('name')}</Text>
		              	<Text style={styles.profileDescription}>{this.props.navigation.getParam('academic_title')} of {this.props.navigation.getParam('department')}</Text>
		              	<Text style={styles.profileDescription}>{this.props.navigation.getParam('institution')}</Text>
                    <Text style={styles.profileDescription}>Experienced in: {this.props.navigation.getParam('accessibility_type')}</Text>

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
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{

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
	}
});
