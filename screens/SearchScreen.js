import React, { Component } from 'react';
import { Platform, View, Text, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import articles from '../data/mockArticles';
import classResources from '../data/mockClassResources';
import people from '../data/mockPeople';
import talks from '../data/mockTalks';
import { PeopleThumbnail } from '../components/Thumbnails';

export default class SearchScreen extends Component {
  state = {
    searchQuery: '',
    isLoading: false,
    showFilters: true,
    filterState: {
      Accessibility: {Vision: false, Hearing: false, Attention: false},
      Resource: {Classroom: false, Article: false, Talk: false, People: false},
      Subject: {CS: false, ME: false, AA: false}
    }
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

  getFilterView = () => {
    return (
      <View>
        {this.getFilterRow('Accessibility', ['Vision', 'Hearing', 'Attention'])}
        {this.getFilterRow('Resource', ['Classroom', 'Article', 'Talk', 'People'])}
        {this.getFilterRow('Subject', ['CS', 'ME', 'AA'])}
      </View>
    )
  };

  getFilterRow = (filter_type, filter_options) => {
    return (
      <View style={styles.filterContainer}>
        <Text style={styles.filterTextStyle}>{filter_type}:</Text>
        {
          filter_options.map((option) => {
            return (
              <Button
                title={option}
                color={this.state.filterState[filter_type][option] ? Colors.mainThemeColor : Colors.lightGray}
                onPress={() => {
                  newFilterState = this.state.filterState
                  newFilterState[filter_type][option] = !newFilterState[filter_type][option]
                  this.setState({
                    filterState: newFilterState
                   });
                }}
              />
            );
          })
        }
      </View>
    )
  };

  render() {
    let filtersSection;

    if (this.state.showFilters) {
      filtersSection = this.getFilterView()
    } else {
      filtersSection = null
    }

    searchResults = getSearchResults(this.state.filterState)

    return (
      <View style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.innerSearchContainer}>
            <View style={styles.searchBarContainer}>
              <SearchBar
                platform="ios"
                placeholder="Type Here..."
                showLoading={this.state.isLoading}
                onChangeText={this.updateSearch}
                value={this.state.searchQuery}
                containerStyle={styles.searchBarOuterContainer}
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
          </View>
        </View>
        <ScrollView style={styles.scrollViewContainer}>
          {/**
           * Go ahead and delete ExpoLinksView and replace it with your content;
           * we just wanted to provide you with some helpful links.
           */}
           <Text style={styles.searchResultsHeaderText}>Search Results</Text>
           {searchResults}
        </ScrollView>
      </View>
    );
  }
}


resources = {
  Classroom: classResources,
  Article: articles,
  Talk: talks,
  People: people
}
function getSearchResults(filterState) {
  return (
    <View>
      <Text>{JSON.stringify(filterState)}</Text>
      <PeopleThumbnail/>
      <PeopleThumbnail/>
      <PeopleThumbnail/>
      <PeopleThumbnail/>
      <PeopleThumbnail/>
      <PeopleThumbnail/>
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
    backgroundColor: Colors.backgroundColor,
    shadowOffset: {height: 0, width: 0},
    shadowColor: Colors.shadowColor,
    shadowOpacity: 1,
    shadowRadius: 3
  },
  innerSearchContainer: {
  },
  searchBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  searchBarOuterContainer: {
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
    color: Colors.mainThemeColor,
    paddingTop: 8
  },
  scrollViewContainer: {
    paddingHorizontal: 20
  },
  searchResultsHeaderText: {
    fontSize: 20,
    paddingTop: 10,
    color: Colors.lightGray
  },
  recentSearchesItemText: {
    fontSize: 15,
    paddingTop: 3,
    color: Colors.lightGray
  }
});
