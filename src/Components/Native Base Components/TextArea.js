import React from "react"
import {View,Text,StyleSheet,TextInput} from "react-native"



const TextArea = ({numberOfLines,isInvalid,isDisabled,state,setState}) => {


const numberOfLinesDefault = numberOfLines ? numberOfLines :5
const DisabledtheTextInput = isDisabled ? false : isDisabled






    return(
        <View style={{width:"80%",height:100}}>
           <TextInput
           style={{borderWidth:1,borderColor:isInvalid?"red":isDisabled?"lightgrey":"skyblue",width:"100%",paddingLeft:10,borderRadius:5}}
           numberOfLines={numberOfLinesDefault}
           placeholder={"Text Area"}
           editable={DisabledtheTextInput}
           selectTextOnFocus={DisabledtheTextInput}
           value={state}
           onChangeText={setState}
          
           />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    }
})


export default TextArea