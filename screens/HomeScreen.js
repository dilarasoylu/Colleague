import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import Images from '../constants/Images';

export default class HomeScreen extends Component {

  render() {

    browseSection = getBrowseSection()

    return (
      <View style={styles.container}>

        <View style={[styles.row, styles.brandContainer]}>
          <Image style={styles.logo} source={Images.logoBlue}/>
          <Text style={styles.title}>Colleague</Text>
        </View>

        <ScrollView style={{paddingHorizontal: 20}}>

          <View style={styles.tipOfTheDay}>
            <Image style={styles.lightBulbStyle} source={require('../assets/images/lightbulb.png')}/>
            <Text style={styles.tipTitleText}>Tip of the Day</Text>
            <Text style={styles.tipText}>Repeat student questions for students with hearing disabilities.</Text>
          </View>

          <Text style={styles.browseHeader}>Browse by Subject</Text>
          {browseSection}

        </ScrollView>

      </View>
    );
  }
}

function getBrowseCategory(name, color, isLeft) {

  margin = 8
  if (isLeft) {
    customStyle = {marginRight: margin}
  } else {
    customStyle = {marginLeft: margin}
  }

  customStyle['backgroundColor'] = color

  return (
    <TouchableOpacity style={[styles.browseCategory, customStyle]}>
      <Text style={styles.browseCategoryText}>{name}</Text>
    </TouchableOpacity>
  )
}

function getBrowseSection() {
  categoryRows = [
    [
      getBrowseCategory('Computer Science', 'goldenrod', true),
      getBrowseCategory('Mathematics', 'darkorange', false)
    ],
    [
      getBrowseCategory('Arts', 'salmon', true),
      getBrowseCategory('English', 'tomato', false)
    ],
    [
      getBrowseCategory('Physics', 'plum', true),
      getBrowseCategory('Chemistry', 'mediumpurple', false)
    ],
    [
      getBrowseCategory('Biology', 'darkolivegreen', true),
      getBrowseCategory('Statistics', 'darkseagreen', false)
    ],
  ]

  return (
    categoryRows.map(row => {
      return (
        <View style={styles.row}>
          {
            row.map(item => {
              return (item)
            })
          }
        </View>
      )
    })
  )
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingVertical: 8
  },
  brandContainer: {
    padding: 20,
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8
  },
  logo: {
    width: 45,
    height: 45
  },
  title: {
    fontSize: 45,
    color: Colors.mainThemeColor,
    fontWeight: '500',
    paddingHorizontal: 10
  },
  tipOfTheDay: {
    marginVertical: 20,
    alignItems: 'center'
  },
  lightBulbStyle: {
    height: 100,
    width: 100,
    padding: 10
  },
  tipTitleText: {
    color: Colors.darkGray,
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 12
  },
  tipText: {
    color: Colors.lightGray,
    fontSize: 18,
    textAlign: 'center',
    width: 200,
    paddingTop: 10
  },
  browseCategory: {
    flexDirection: 'row',
    flex: 0.5,
    height: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  browseCategoryText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 22,
    textAlign: 'center'
  },
  browseHeader: {
    color: Colors.darkGray,
    fontWeight: '600',
    fontSize: 20,
    paddingVertical: 10
  }
});
