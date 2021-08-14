import React, { useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


const RadioButtons = ({ size, colorScheme,isInvalid,isDisabled }) => {

    console.log(isInvalid)

    const [radioValue, setradioValue] = useState(0)

    var radio_props = [
        { label: 'hamza', value: "hamza" },
        { label: 'basit', value: "basit" }
    ];

    const NativeSize = {
        xs: 10,
        sm: 15,
        md: 25,
        lg: 35
    }

    const NativeColors = {
        primary: "skyblue",
        secondary: "pink",
        emerald: "#6EE7B7"
    }


    //ButtonSize Computation

    let Btnsize = NativeSize.xs

    if (size == "xs") {
        Btnsize = NativeSize.xs
    }
    else if (size == "sm") {
        Btnsize = NativeSize.sm
    }
    else if (size == "md") {
        Btnsize = NativeSize.md
    }
    else if (size == "lg") {
        Btnsize = NativeSize.lg
    }
    else {
        Btnsize = NativeSize.xs
    }



    //ButtonColor Computation

    let BtnColor = NativeColors.primary

    switch (colorScheme) {
        case "primary":
            BtnColor = NativeColors.primary
            break;
        case "secondary":
            BtnColor = NativeColors.secondary
            break;
        case "emerald":
            BtnColor = NativeColors.emerald
            break;
        default:
            BtnColor = NativeColors.primary
            break;
    }





    return (
        <View>

            <Text>{radioValue}</Text>

            <RadioForm
                radio_props={radio_props}
                initial={1}
                animation={true}
                buttonSize={Btnsize}
                selectedButtonColor={BtnColor}
                buttonColor={isInvalid ? "red" : BtnColor}
                onPress={(value) => setradioValue(value)}
                disabled={isDisabled}
                
                // labelStyle={{color:"red"}}
            /> 










        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default RadioButtons














{/* <RadioForm
  formHorizontal={true}
  animation={true}
>
  
  {
    radio_props.map((obj, i) => (
      <RadioButton labelHorizontal={true} key={i} >
 
        <RadioButtonInput
          obj={obj}
          index={i}
        //   isSelected={this.state.value3Index === i}
          onPress={(value) => setradioValue(value)}
          borderWidth={1}
          buttonInnerColor={'#e74c3c'}
        //   buttonOuterColor={this.state.value3Index === i ? '#2196f3' : '#000'}
          buttonSize={40}
          buttonOuterSize={80}
          buttonWrapStyle={{marginLeft: 10}}
        />
        <RadioButtonLabel
          obj={obj}
          index={i}
          labelHorizontal={true}
        //   onPress={onPress}
          labelStyle={{fontSize: 20, color: '#2ecc71'}}
        
        />
      </RadioButton>
    ))
  }  
</RadioForm>  */}