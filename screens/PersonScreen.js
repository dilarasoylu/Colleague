import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'
import { PeopleThumbnail } from '../components/Thumbnails';

import Colors from '../constants/Colors';

import Images from '../constants/Images';
import {logged_user_uuid} from '../data/login_information';

import talks from '../data/mockTalks';
import class_resources from '../data/mockClassResources';
import articles from '../data/mockArticles';


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


  getResourcesbyUUID = (array, uuid) => {
    add = []
    for (let i in array){
      if (array[i].creator_uuid == '0001'){
        add.push(array[i])
      }
    }
    return add
  };

  getResults = (tab, uuid) => {
    if (tab == 0){
      add = this.getResourcesbyUUID(class_resources, this.props.uuid)
      add = add.concat(this.getResourcesbyUUID(talks, this.props.uuid))
      add = add.concat(this.getResourcesbyUUID(articles, this.props.uuid))
    } else if (tab == 1){
      add = this.getResourcesbyUUID(class_resources, this.props.uuid)
    } else if (tab == 2){
      add = this.getResourcesbyUUID(articles, this.props.uuid)
    } else if (tab == 3){
      add = this.getResourcesbyUUID(talks, this.props.uuid)
    }
    return(
    <View>
    <Text>{JSON.stringify(add)}</Text>
    <Text>{tab}</Text>
    <PeopleThumbnail/>
    <PeopleThumbnail/>
    </View>
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
    if (this.props.uuid == '0001'){
      displayIcon ='ios-settings'
    }
    else{
      displayIcon = 'ios-mail'
    }

    results = this.getResults(this.state.selectedIndex, logged_user_uuid)
 

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
		              	<Text style={styles.title}>{this.props.academic_title} of {this.props.department}</Text>
		              	<Text style={styles.institution}>{this.props.institution}</Text>

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
            <Text>{JSON.stringify(this.props.uuid)}</Text>
            <Text>{logged_user_uuid}</Text>



      	{results}
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
  title:{
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