import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import { placeholder } from "@babel/types";
let timer = null

export default class SerachBar extends Component {

    onChange = (text) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            this.props.searchRequester(text)
        }, 1000)
    }

    render() {
        return (
            <TextInput style={style.bar}
                onChangeText={this.onChange}
                placeholder='serach' />
        )
    }
}



const style = StyleSheet.create({
    bar: {
        flex: 1,
        borderWidth: 2,
        borderRadius: 5,
        height: 50,
        maxHeight: 50,
        width: '100%',
        shadowColor: 'grey',
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
