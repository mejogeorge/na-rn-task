
import React, { Component } from "react"
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
export default class Card extends Component {

    render() {

        return (
            <TouchableOpacity style={style.touch}>
                <Text style={marginTop = 20}>name : {this.props.name}</Text>
                <View style={style.bottomView}>
                    <Text >gender : {this.props.gender}</Text>
                    <Text style={style.height}>height : {this.props.height}</Text>
                </View>
                {/* <View style={style.seprator}></View> */}

            </TouchableOpacity>
        );
    }
}


const style = StyleSheet.create({
    touch: {
        flex:1,
        backgroundColor: 'white',
        padding:5,
        shadowColor: 'grey',
        shadowOffset: { width: -1, height:1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        marginTop:3,
        marginLeft:3
    },
    height: {
        // justifyContent:'flex-end',
        width: '30%'
    },
    bottomView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
       
    },
    seprator: {
        backgroundColor: 'grey',
        height: 1,
        marginTop: 20,
        marginLeft:10,
        marginRight:5
    }

})