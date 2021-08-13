import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native"


const ButtonSummarise = ({ size, variant, colorScheme, fontsize, isLoading, isDisabled, isLoadingText }) => {

    console.log(isDisabled)

    const NativeSize = {
        xs: {
            height: "5%",
            width: "22%"
        },

        sm: {
            height: "8%",
            width: "30%"
        },

        md: {
            height: "10%",
            width: "50%"
        },

        lg: {
            height: "12%",
            width: "70%"
        }
    }

    const btnVariant = {
        outline: {
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: (!colorScheme == "primary") ? "pink" : (colorScheme == "secondary") ? "pink" : "skyblue"

        },
        ghost: {
            backgroundColor: "transparent",
        },
        solid: {
            backgroundColor: (!colorScheme == "primary") ? "pink" : (colorScheme == "secondary") ? "pink" : "skyblue"
        }

    }

    const btnFontsize = fontsize ? fontsize : 15
    const btnIsloadingText = isLoadingText ? isLoadingText : "hamza"


    return (

        <React.Fragment>

            {isDisabled ?

                //Disabled Button Starts
                <TouchableOpacity
                    activeOpacity={isDisabled ? 1 : 0.7}
                    style={[

                        (size == "xs") ? NativeSize.xs :
                            (size == "sm") ? NativeSize.sm :
                                (size == "md") ? NativeSize.md :
                                    (size == "lg") ? NativeSize.lg :
                                        NativeSize.s,

                        { justifyContent: "center", alignItems: "center", borderRadius: 5, backgroundColor: "grey" }

                    ]}
                >
                    <Text style={{ color: "lightgrey", fontSize: btnFontsize }}>Disabled</Text>

                </TouchableOpacity>
                //Disabled Button Ends

                :

                //All Rest Buttons Starts
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[

                        (size == "xs") ? NativeSize.xs :
                            (size == "sm") ? NativeSize.sm :
                                (size == "md") ? NativeSize.md :
                                    (size == "lg") ? NativeSize.lg :
                                        NativeSize.sm
                        ,
                        (variant == "outline") ? btnVariant.outline :
                            (variant == "ghost") ? btnVariant.ghost :
                                (variant == "solid") ? btnVariant.solid :
                                    { backgroundColor: "skyblue" }
                        ,

                        { justifyContent: "center", alignItems: "center", borderRadius: 5 }

                    ]}
                >
                    {isLoading ?
                        isLoadingText ?
                            <View style={{width: "90%", height: "80%", flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
                                <ActivityIndicator size="large" color={"white"} style={{paddingRight:15}} />
                                <Text style={[

                                    (colorScheme == "primary" && variant == "outline") ? { color: "skyblue" } :
                                        (colorScheme == "primary" && variant == "ghost") ? { color: "skyblue" } :
                                            (colorScheme == "primary" && variant == "solid") ? { color: "white" } :
                                                (colorScheme == "secondary" && variant == "outline") ? { color: "pink" } :
                                                    (colorScheme == "secondary" && variant == "ghost") ? { color: "pink" } :
                                                        (colorScheme == "secondary" && variant == "solid") ? { color: "white" } :
                                                            { color: "white" },
                                    { fontSize: btnFontsize }

                                ]}>{btnIsloadingText}</Text>

                            </View>

                            :
                            <ActivityIndicator
                                size="large"
                                color={"white"}
                            /> :

                        <Text style={[

                            (colorScheme == "primary" && variant == "outline") ? { color: "skyblue" } :
                                (colorScheme == "primary" && variant == "ghost") ? { color: "skyblue" } :
                                    (colorScheme == "primary" && variant == "solid") ? { color: "white" } :
                                        (colorScheme == "secondary" && variant == "outline") ? { color: "pink" } :
                                            (colorScheme == "secondary" && variant == "ghost") ? { color: "pink" } :
                                                (colorScheme == "secondary" && variant == "solid") ? { color: "white" } :
                                                    { color: "white" },
                            { fontSize: btnFontsize }

                        ]}>hamza</Text>
                    }


                </TouchableOpacity>
                //All Rest Buttons ends

            }




        </React.Fragment>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})


export default ButtonSummarise