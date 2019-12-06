import React, { Component } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import images from '../constants/Images'
import mockPeople from '../data/mockPeople';
import Toast from 'react-native-tiny-toast'


export default class AssignmentScreen extends Component {
  render() {
    fields = {
      resource_type: this.props.navigation.getParam('resource_type'),
      accessibility_type: this.props.navigation.getParam('accessibility_type'),
      subjects: this.props.navigation.getParam('subjects'),
      creator_uuid: this.props.navigation.getParam('creator_uuid'),
      title: this.props.navigation.getParam('title'),
      image_name: this.props.navigation.getParam('image_name'),
      description: this.props.navigation.getParam('description')
    }

    creator = getCreatorFields(fields.creator_uuid)
    accessibilityRow = getFieldRow('Tailored for Accessibility Needs:', fields.accessibility_type)
    subjectRow = getFieldRow('Relevant for Subjects:', fields.subjects)
    image = images[fields.image_name]
    console.log(images)
    console.log(fields.image_name)
    console.log(image)

    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.informationContainer}>
            <View style={styles.container}>
              <Text style={styles.titleText}>{fields.title}</Text>
              <View style={styles.row}>
                <Text style={styles.titleCreator}>Created by </Text>
                <Text style={styles.titleCreatorColored}>Dr. {creator.name}</Text>
              </View>
              {accessibilityRow}
              {subjectRow}
              <Text style={styles.fieldHeader}>Description:</Text>
              <Text style={styles.fieldItem}>{fields.description}</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={image}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

function getCreatorFields(uuid) {
  for (person in mockPeople) {
    if (mockPeople[person].uuid == uuid) {
      return mockPeople[person]
    }
  }
}

function getFieldRow(fieldName, fieldItems) {
  return (
    <View style={styles.row}>
      <Text style={styles.fieldHeader}>{fieldName}</Text>
      {
        fieldItems.map(item => {
          return (
            <Text style={styles.fieldItem}>{item}</Text>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.backgroundColor,
  },
  informationContainer: {
    backgroundColor: Colors.backgroundColor,
    shadowOffset: {height: 0, width: 0},
    shadowColor: Colors.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 3,
    paddingBottom: 16
  },
  container: {
    paddingHorizontal: 20
  },
  row: {
    flexDirection: 'row',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.mainThemeColor,
    paddingTop: 12
  },
  titleCreator: {
    fontSize: 18,
    color: Colors.lightGray,
    paddingTop: 8,
    paddingBottom: 4
  },
  titleCreatorColored: {
    fontSize: 18,
    color: Colors.mainThemeColor,
    paddingTop: 8,
    paddingBottom: 4
  },
  fieldHeader: {
    fontSize: 16,
    color: Colors.mainThemeColor,
    paddingTop: 8
  },
  fieldItem: {
    fontSize: 16,
    color: Colors.lightGray,
    paddingTop: 8,
    paddingHorizontal: 8
  },
  imageContainer: {
    flex: 1,
    height: 500,
    paddingHorizontal: 20,
    paddingVertical: 20
  },
  imageStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});
