/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Text, ActivityIndicator,
  RefreshControl, View
} from 'react-native';
import Home from "./Componentz/Home"
import Header from "./Componentz/Header"
import Card from "./Componentz/Card"
import SearchBar from "./Componentz/SearchBar"
import { apiFetchRequest } from "./Componentz/FetchRequest"


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      pageNumber: 0,
      isloading: true,
      isOnNextCall: false,
      refreshingIndicator: false,
      dataSource: [],
      nextUrl: '',
      initialURL: "https://swapi.co/api/people/?page=1",
      serachURL: 'https://swapi.co/api/people/?search=',
      isSearchRequest: false,
    }

  }



  componentDidMount() {
    this.fetchAndHandleManager(this.state.initialURL)
  }

  fetchAndHandleManager(url) {
    if (!this.state.isOnNextCall) {
      this.setState({
        isOnNextCall: true
      })
    } else {
      return
    }
    apiFetchRequest(url)
      .then((responseJson) => {
        if (responseJson !== 'error') {
          this.setState(
            {
              isloading: false,
              nextUrl: responseJson.next,
              isOnNextCall: false,
              refreshingIndicator: false,
              dataSource: this.state.pageNumber !== 0 ? [...this.state.dataSource, ...responseJson.results] : responseJson.results,
              pageNumber: this.state.pageNumber + 1
            })
        } else {
          this.setState({
            isloading: false,
            isOnNextCall: false,
            refreshingIndicator: false,
          })
        }
      }
      )
  }


  renderItem = (data) => <Card name={data.item.name}
    gender={data.item.gender}
    height={data.item.height === 'unknown' ? '-' : data.item.height} />


  refreshList() {
    if (!this.state.isSearchRequest) {
      // console.warn('refresh list called')
      this.setState({
        isOnNextCall: true,
        refreshingIndicator: true,
        pageNumber: 0,
      })
      this.fetchAndHandleManager(this.state.initialURL)
    }
  }


  renderFooterView() {
    // console.warn('footer func called')
    if (this.state.isOnNextCall) {
      return (
        <View style={[flex = 1, paddingVertical = 20, style.activity, height = 40]}>
          <ActivityIndicator style={style.activity} animating size='large' color='black' />
        </View>
      )
    } else {
      return null
    }
  }

  searchRequest = (text) => {

    if (text) {
      this.setState({
        dataSource: [],
        isOnNextCall: false,
        isSearchRequest: true,
      })
      this.fetchAndHandleManager(this.state.serachURL + text)
    } else {
      this.setState({
        dataSource: [],
        isSearchRequest: false,
        pageNumber: 0,
        isOnNextCall: false,
      })
      this.fetchAndHandleManager(this.state.initialURL)
    }
  }

  render() {
    if (this.state.isloading) {
      return (
        <SafeAreaView style={style.safe}>
          <Header />
          <ActivityIndicator style={style.activity} size='large' color='#F3B431' />
        </SafeAreaView>
      )
    }

    return (
      <SafeAreaView style={style.safe}>
        <Header>
          <SearchBar searchRequester={this.searchRequest} />
        </Header>

        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          onEndReached={() => this.state.nextUrl !== null ? this.fetchAndHandleManager(this.state.nextUrl) : null}
          onEndReachedThreshold={0.5}
          keyExtractor={(item) => item.name + item.mass}
          refreshControl={<RefreshControl
            refreshing={this.state.refreshingIndicator}
            onRefresh={() => this.refreshList()} />}
          ListFooterComponent={() => this.renderFooterView()}
        />
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "white"
  },
  touch: {
    flex: 1,
    backgroundColor: 'red'
  },
  activity: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})


