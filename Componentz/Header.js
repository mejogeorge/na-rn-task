import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native";

export default class Header extends Component {
    render() {
        return (
            <View style={style.head}>
                <View style={style.headerText}><Text style={style.text}>Nest Away</Text></View>
                <View style={style.child}>{this.props.children}</View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    head: {
        height: 90,
        backgroundColor: "#FFF222",
        // justifyContent: 'center',
        // alignItems: 'center',
        shadowColor: '#E5B143',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        padding: 5
    },
    child: {
        height: 40
    },
    text: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        padding: 10
    }
})