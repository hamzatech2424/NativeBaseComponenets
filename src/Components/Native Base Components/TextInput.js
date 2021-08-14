import React, { useState } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"


const TextInputCompo = ({ size, placeholder, variant, Icon1, Icon2, password, value, setValue }) => {

    //state for focus
    const [focus, setFocus] = useState("lightgrey")
    const [hidePass, setHidePass] = useState(true);


    //default values

    const textInputPlaceholder = placeholder ? placeholder : "Text here"



    // Native Base Sizes

    const NativeSizes = {
        xs: {
            width: "100%",
            height: "100%",
            fontSize: 14
        },

        sm: {
            width: "100%",
            height: "100%",
            fontSize: 16
        },
        md: {
            width: "100%",
            height: "100%",
            fontSize: 18
        },
        lg: {
            width: "100%",
            height: "100%",
            fontSize: 20
        },

    }

    //TextInput Sizes computation

    let textInputSize = NativeSizes.xs

    switch (size) {
        case "xs":
            textInputSize = NativeSizes.xs
            break;
        case "sm":
            textInputSize = NativeSizes.sm
            break;
        case "md":
            textInputSize = NativeSizes.md
            break;
        case "lg":
            textInputSize = NativeSizes.lg
            break;
        default:
            textInputSize = NativeSizes.xs
            break;
    }


    // native base variants

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


    //native base variant computations


    let textInputVariants = NativeVariants.outline


    switch (variant) {
        case "outline":
            textInputVariants = NativeVariants.outline
            break;
        case "filled":
            textInputVariants = NativeVariants.filled
            break;
        case "underlined":
            textInputVariants = NativeVariants.underlined
            break;
        case "Rounded":
            textInputVariants = NativeVariants.Rounded
            break;
        default:
            textInputVariants = NativeVariants.outline
            break;
    }







    return (
        <React.Fragment>

            {(Icon1 && Icon2) ?

                //Icons wala View
                <View style={{ width: "90%", height: 50, flexDirection: "row", borderColor: focus, borderWidth: 2, borderRadius: 10 }}>
                    <View style={{ height: "100%", width: "15%", justifyContent: "center", alignItems: "center" }}>
                        {Icon1()}
                    </View>
                    <View style={{ height: "100%", width: "70%" }}>
                        <TextInput
                            placeholder={textInputPlaceholder}
                            style={[{ borderWidth: 0, paddingLeft: 10, }, textInputSize,]}
                            onFocus={() => setFocus("skyblue")}
                            onBlur={() => setFocus("lightgrey")}
                            value={value}
                            onChangeText={setValue}
                        />
                    </View>
                    <View style={{ height: "100%", width: "15%", justifyContent: "center", alignItems: "center" }}>
                        {Icon2()}
                    </View>
                </View>

                :


                (password) ?

                    <View style={{ width: "90%", height: 50, flexDirection: "row", borderColor: focus, borderWidth: 2, borderRadius: 10 }}>

                        <View style={{ height: "100%", width: "70%" }}>
                            <TextInput
                                secureTextEntry={hidePass ? true : false}
                                placeholder={textInputPlaceholder}
                                style={[{ borderWidth: 0, paddingLeft: 10, }, textInputSize,]}
                                onFocus={() => setFocus("skyblue")}
                                onBlur={() => setFocus("lightgrey")}
                                value={value}
                                onChangeText={setValue}
                            />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setHidePass(!hidePass)}
                            style={{ height: "100%", width: "30%", justifyContent: "center", alignItems: "center", backgroundColor: "skyblue" }}>
                            <Text style={{ color: "white" }}>{hidePass ? "Show" : "Hide"}</Text>
                        </TouchableOpacity>
                    </View>



                    :

                    //Normal View
                    <View style={{ width: "90%", height: 50 }}>

                        <TextInput
                            placeholder={textInputPlaceholder}
                            style={[{ borderColor: focus, paddingLeft: 10, }, textInputSize, textInputVariants]}
                            onFocus={() => setFocus("skyblue")}
                            onBlur={() => setFocus("lightgrey")}
                            value={value}
                            onChangeText={setValue}
                        />

                    </View>



            }














        </React.Fragment>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default TextInputCompo