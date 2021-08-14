import React,{useState} from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button,Swittch,ButtonSummarise,RadioButtons,TextInputCompo } from "../Components/Native Base Components"
import Ionicons from 'react-native-vector-icons/Ionicons';


const Main = () => {

 const [input,setInput] = useState("")    
 const IconCompo = ({name,size,color}) => {
    return (
        <Ionicons name={name} size={size} color={color}  />
    )
}

    
    return (
        <View style={styles.container}>
            <Text>{input}</Text>
              
             <TextInputCompo 
             size={"md"}
             placeholder={"hamza here"}
            

            // password
            //  Icon1={()=><IconCompo name={"call"} size={22} color={"skyblue"} />}
            //  Icon2={()=><IconCompo name={"reader"} size={22} color={"skyblue"} />}
            
             />
           
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