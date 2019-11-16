import React, { Component } from 'react';
import { Platform, View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default class SearchScreen extends Component {
  state = {
    searchQuery: '',
    isLoading: false,
    showFilters: true
  };

  updateSearch = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      isLoading: false
     });
  };

  updateFilterVisibility = () => {
    this.setState({
      showFilters: !this.state.showFilters
     });
  };

  render() {
    let filtersSection;

    if (this.state.showFilters) {
      filtersSection = getFilterView(this.state)
    } else {
      filtersSection = null
    }

    return (
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <SearchBar
            platform="ios"
            placeholder="Type Here..."
            showLoading={this.state.isLoading}
            onChangeText={this.updateSearch}
            value={this.state.searchQuery}
            containerStyle={styles.searchOuterContainer}
            cancelButtonProps={styles.searchCancelButtonProps}
          />
          <TouchableOpacity onPress={this.updateFilterVisibility}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
              size={27}
              style={{ marginTop: 17 }}
              color={this.state.showFilters ? Colors.tabIconDefault : Colors.tabIconSelected}
            />
          </TouchableOpacity>
        </View>
        {filtersSection}
        <ScrollView style={styles.scrollViewContainer}>
          {/**
           * Go ahead and delete ExpoLinksView and replace it with your content;
           * we just wanted to provide you with some helpful links.
           */}
           <Text style={styles.recentSearchesHeaderText}>Recent Searches</Text>
           <Text style={styles.recentSearchesItemText}>cs professor</Text>
           <Text style={styles.recentSearchesItemText}>maths</Text>
           <Text style={styles.recentSearchesItemText}>pointers</Text>
        </ScrollView>
      </View>
    );
  }
}

function getFilterView(state) {
  return (
    <View>
      {getFilterRow(state, 'Accessibility', ['Vision', 'Hearing', 'Attention'])}
      {getFilterRow(state, 'Resource', ['Classroom', 'Article', 'Talk', 'People'])}
      {getFilterRow(state, 'Subject', ['CS', 'ME', 'AA'])}
    </View>
  )
}

function getFilterRow(state, filter_type, filter_options) {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTextStyle}>{filter_type}:</Text>
      <Button
        title={filter_options[0]}
        color={Colors.mainThemeColor}
        onPress={() => Alert.alert('Vision pressed')}
      />
      <Button
        title={filter_options[1]}
        color={Colors.mainThemeColor}
        onPress={() => Alert.alert('Vision pressed')}
      />
      <Button
        title={filter_options[2]}
        color={Colors.mainThemeColor}
        onPress={() => Alert.alert('Vision pressed')}
      />
    </View>
  )
}

SearchScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.backgroundColor,
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  searchOuterContainer: {
    flex: 0.98,
    backgroundColor: Colors.backgroundColor
  },
  searchCancelButtonProps: {
    color: Colors.mainThemeColor
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20
  },
  filterTextStyle: {
    fontSize: 18,
    color: Colors.lightGray,
    paddingTop: 8
  },
  scrollViewContainer: {
    paddingHorizontal: 20
  },
  recentSearchesHeaderText: {
    fontSize: 17,
    paddingTop: 5,
    color: Colors.lightGray
  },
  recentSearchesItemText: {
    fontSize: 15,
    paddingTop: 3,
    color: Colors.lightGray
  }
});
