import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import Colors from '../constants/Colors';

export function ArticleThumbnail(props) {
  return (
    <View>
    </View>
  );
}

export function ClassResourceThumbnail(props) {
  return (
    <View>
    </View>
  );
}

export function PeopleThumbnail(props) {
  return (
    <TouchableOpacity
      onPress={() => {}}
      style={styles.thumbnailContainer}>
    </TouchableOpacity>
  );
}

export function TalkThumbnail(props) {
  return (
    <View>
    </View>
  );
}

const styles = StyleSheet.create({
  thumbnailContainer: {
    height: 120,
    backgroundColor: Colors.mainThemeColor,
    marginTop: 10
  }
});
