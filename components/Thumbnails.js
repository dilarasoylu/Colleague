import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

import Colors from '../constants/Colors';

export function ArticleThumbnail(props) {
  return (
    <TouchableOpacity
      style={styles.thumbnailContainer}>
      <Text>{JSON.stringify(props.fields)}</Text>
    </TouchableOpacity>
  );
}

export function ClassResourceThumbnail(props) {
  return (
    <TouchableOpacity
      style={styles.thumbnailContainer}>
      <Text>{JSON.stringify(props.fields)}</Text>
    </TouchableOpacity>
  );
}

export function PeopleThumbnail(props) {
  // props.fields contain the fields
  // For passing parameters to screens read: https://reactnavigation.org/docs/en/params.html
  return (
    <TouchableOpacity
      onPress={() => {props.navigation.navigate('People')}}
      style={styles.thumbnailContainer}
    >
      <View style={styles.thumbnailImageOuterContainer}>
        <Image
          style={styles.thumbnailImageInnerContainer}
          source={{uri: props.fields.profile_image_uri}}
        />
      </View>
      <View style={styles.thumbnailTextContainer}>
        <Text style={styles.thumbnailTitleStyle}>{props.fields.name}</Text>
        <View styles={styles.thumbnailTextRow}>
          <View>
            <Text style={styles.thumbnailSecondaryTitleStyle}>{props.fields.academic_title} at {props.fields.institution}</Text>
          </View>
        </View>
        <View styles={styles.thumbnailTextRow}>
          <Text style={styles.thumbnailBodyTextStyle}>Subjects: {props.fields.subjects.join()}</Text>
        </View>
        <View styles={styles.thumbnailTextRow}>
          <Text style={styles.thumbnailBodyTextStyle}>Taught students with accessibility needs: {props.fields.accessibility_type.join()}</Text>
        </View>
        <View styles={styles.thumbnailTextRow}>
          <Text style={styles.thumbnailBodyTextStyle}>Resource type: People</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function TalkThumbnail(props) {
  return (
    <TouchableOpacity
      style={styles.thumbnailContainer}>
      <Text>{JSON.stringify(props.fields)}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    backgroundColor: Colors.whiteComponentColor,
    marginVertical: 8,
    shadowOffset: {height: 0, width: 0},
    shadowColor: Colors.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 3,
    flexDirection: 'row'
  },
  thumbnailImageOuterContainer: {
    flex: 0.25,
    margin: 10,
    marginHorizontal: 15,
    alignItems: 'center'
  },
  thumbnailImageInnerContainer: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  thumbnailTextContainer: {
    flex: 0.65,
    margin: 10,
    flexDirection: 'column'
  },
  thumbnailTitleStyle: {
    fontSize: 18
  },
  thumbnailTextRow: {
    flex: 1,
    flexDirection: 'row'
  },
  thumbnailSecondaryTitleStyle: {
    fontSize: 15,
    color: Colors.lightGray,
    flexDirection: 'row'
  },
  thumbnailSecondaryTitleColoredStyle: {
    fontSize: 15,
    color: Colors.mainThemeColor,
    flexDirection: 'row'
  },
  thumbnailBodyTextStyle: {
    fontSize: 14,
    color: Colors.lightGray
  }
});
