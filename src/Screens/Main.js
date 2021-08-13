import React from "react"
import {View,Text,StyleSheet} from "react-native"
import {Button} from "../Components/Native Base Components"


const Main = () => {
    return(
        <View style={styles.container}>
            <Button size={"sm"}  />
        </View>
    )
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})


export default Main