/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View,Text} from 'react-native';


export default class Home extends Component{

  render() {
    return (
      <View style={styles.container}>
      {this.props.newArr.map((data,key) => <Text style={styles.card}>{data.name}</Text>)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:'flex-start',
  }, 
  card:{
    // height:30,
    backgroundColor:"#45CE30",
    borderRadius:5,
    justifyContent:'center'


  }
});
