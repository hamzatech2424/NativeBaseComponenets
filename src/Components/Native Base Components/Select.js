import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
// import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';





const Select = ({placeholder,placeholderTextColor,variant}) => {

    const [selectedLanguage, setSelectedLanguage] = useState();


    const defaultPlaceholder = placeholder ? placeholder : "Placeholder"
    const defaultplaceholderTextColor = placeholderTextColor ? placeholderTextColor : "lightgrey"

    const placeholderr = {
        label: defaultPlaceholder,
        value: null,
        color: defaultplaceholderTextColor,
      };


      const NativeVariants = {
        outline: {
            borderWidth: 2,
            borderRadius: 5,
        },
        filled: {
            backgroundColor: "grey",
            borderWidth: 0
        },
        underlined: {
            borderBottomWidth: 2
        },
        Rounded: {
            borderRadius: 20,
            borderWidth: 2,
        }

    }


    
    let SelectVariants = NativeVariants.outline


    switch (variant) {
        case "outline":
            SelectVariants = NativeVariants.outline
            break;
        case "filled":
            SelectVariants = NativeVariants.filled
            break;
        case "underlined":
            SelectVariants = NativeVariants.underlined
            break;
        case "Rounded":
            SelectVariants = NativeVariants.Rounded
            break;
        default:
            SelectVariants = NativeVariants.outline
            break;
    }




    return (
        <React.Fragment>
            {/* <Text>{selectedLanguage}</Text> */}
            <View style={[{ width: "80%", height: 55,borderColor:"lightgrey" },SelectVariants]}>

            <RNPickerSelect
            style={{color:"black",width:"100%",height:"100%"}}
            onValueChange={(value) => setSelectedLanguage(value)}
            placeholder={placeholderr}
            value={selectedLanguage}
            // disabled={true}
            items={[
                { label: 'Football', value: 'football', },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />

            </View>
        </React.Fragment>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default Select