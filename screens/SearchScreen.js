import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';

import Colors from '../constants/Colors';

export default class SearchScreen extends Component {
  state = {
    searchQuery: '',
  };

  updateSearch = searchQuery => {
    this.setState({
      searchQuery: searchQuery,
      isLoading: false
     });
  };

  render() {
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
        </View>
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
    paddingHorizontal: 10
  },
  searchOuterContainer: {
    backgroundColor: Colors.backgroundColor,
  },
  searchCancelButtonProps: {
    color: Colors.mainThemeColor
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
