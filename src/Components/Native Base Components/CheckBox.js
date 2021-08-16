import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
// import CheckBox from 'react-native-check-box'
import CheckBox from 'react-native-check-box'


const CheckBOX = ({ isInvalid, colorScheme,isChecked }) => {


    const [toggleCheckBox, settoggleCheckBox] = useState(false)
    const toggle = () => settoggleCheckBox(previousState => !previousState);


    const NativeBaseColorScheme = {
        danger: "red",
        info: "#108BCA",
        orange: "orange",
        purple: "purple"
    }


    let ColorForCheckbox = NativeBaseColorScheme.danger


    switch (colorScheme) {
        case "danger":
            ColorForCheckbox = NativeBaseColorScheme.danger
            break;
        case "info":
            ColorForCheckbox = NativeBaseColorScheme.info
            break;
        case "orange":
            ColorForCheckbox = NativeBaseColorScheme.orange
            break;
        case "purple":
            ColorForCheckbox = NativeBaseColorScheme.purple
            break;
        default:
            ColorForCheckbox = NativeBaseColorScheme.danger
            break;
    }


 
    return (
        <View style={{ width: '50%', height: "20%" }}>
            <CheckBox
                
                isChecked={isChecked? true :toggleCheckBox}
                checkBoxColor={isInvalid ? "red" : ColorForCheckbox}
                onClick={toggle}
            rightText={"CheckBox"}
            />

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})



export default CheckBOX