import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

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
  // For passing parameters to screens read: https://reactnavigation.org/docs/en/params.html
  return (
    <TouchableOpacity
      onPress={() => {props.navigation.navigate('People')}}
      style={styles.thumbnailContainer}>
      <Text>{JSON.stringify(props.fields)}</Text>
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
    height: 120,
    backgroundColor: Colors.mainThemeColor,
    marginTop: 10
  }
});
