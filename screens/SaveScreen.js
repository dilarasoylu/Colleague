import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, Dimensions} from 'react-native';
import {ButtonGroup, Button, Avatar} from 'react-native-elements'
import { Ionicons  } from '@expo/vector-icons'
import { ArticleThumbnail, ClassResourceThumbnail, PeopleThumbnail, TalkThumbnail } from '../components/Thumbnails';
import talks from '../data/mockTalks';
import class_resources from '../data/mockClassResources';
import articles from '../data/mockArticles';
import Colors from '../constants/Colors';
import Images from '../constants/Images';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
 
    this.updateIndex = this.updateIndex.bind(this)
  };

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  };


  getSavedResources = (array) => {
    mySaved = []
    for (let i in array){
      console.log(array[i].saved)
      if (array[i].saved){
        mySaved.push(array[i])
      }
    }
    return mySaved
  };

  thumbnailMatching = {
    Classroom: ClassResourceThumbnail,
    Article: ArticleThumbnail,
    Talk: TalkThumbnail,
    People: PeopleThumbnail
  }

  getResults = (tab, navigation) => {
      if (tab == 0){
        mySaved = this.getSavedResources(class_resources)
        mySaved = mySaved.concat(this.getSavedResources(talks))
        mySaved= mySaved.concat(this.getSavedResources(articles))
      } else if (tab == 1){
        mySaved = this.getSavedResources(class_resources)
      } else if (tab == 2){
        mySaved = this.getSavedResources(articles)
      } else if (tab == 3){
        mySaved = this.getSavedResources(talks)
      }
      return(
        <View>
        {
          mySaved.map((mockItem) => {
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


  render() {
    const buttons = ['ALL', 'CLASSROOM', 'ARTICLES', 'TALKS']

    const { selectedIndex } = this.state
    results = this.getResults(this.state.selectedIndex, this.props.navigation)
    return (
      <View style={styles.container}>
        <View style = {styles.topView}>
          <View style = {styles.rowItem}>
            <Text style={styles.title}>My Saved</Text>
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
  containter: {
    flex: 1
  },
  topView: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
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
});

