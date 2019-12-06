import React, { Component} from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import Images from '../constants/Images';

export default class HomeScreen extends Component {

  render() {

    browseSection = getBrowseSection()

    return (
      <View style={styles.container}>

        <View style={[styles.row, {paddingHorizontal: 20}]}>
          <Image style={styles.logo} source={Images.logoBlue}/>
          <Text style={styles.title}>Colleague</Text>
        </View>

        <ScrollView style={{paddingHorizontal: 20}}>

          <View style={styles.tipOfTheDay}>
          </View>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 8
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8
  },
  logo: {
    width: 50,
    height: 50
  },
  title: {
    fontSize: 45,
    color: Colors.mainThemeColor,
    fontWeight: '500',
    paddingHorizontal: 10
  },
  tipOfTheDay: {
    height: 200,
    backgroundColor: Colors.mainThemeColor,
    marginBottom: 10
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
  }
});
