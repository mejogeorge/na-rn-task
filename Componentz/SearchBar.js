import React,{Component} from "react";
import {TextInput,StyleSheet} from "react-native";
import { placeholder } from "@babel/types";

export default class SerachBar extends Component {
    render(){
        return(
            <TextInput style={style.bar}
            onChangeText={(text)=>this.props.searchRequester()}
            placeholder='serach'/>
        )
    }
}



const style = StyleSheet.create({
    bar:{
        flex:1,
        borderWidth:2,
        borderRadius:5,
        height:50,
        maxHeight: 50,
        width:'100%',
        shadowColor: 'grey',
        shadowOffset: { width: -1, height:1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 3,
        justifyContent:'center',
        alignItems:'center'
    }
})
