import React,{useState} from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button,Swittch,ButtonSummarise } from "../Components/Native Base Components"
import CheckBox from '@react-native-community/checkbox';


const Main = () => {

    
    return (
        <View style={styles.container}>
              
             <ButtonSummarise size={"lg"} isDisabled  />
           
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default Main