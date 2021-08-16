import React from "react"
import { View, Text, StyleSheet, Linking } from "react-native"


const Link = ({ href, isUnderlined,size }) => {

    

    const defaulthref = href ? href : "www.google.com"
    const defaultText = "Google Link"
    const isUnderlinedText = isUnderlined ? { textDecorationLine: 'underline' } : null

    const NativeBaseSizes = {
        sm:  13 ,
        md:  16 ,
        lg:  20 ,
        xl:  23 
    }


    let DefaultSize = NativeBaseSizes.sm

    switch (size) {
        case "sm":
            DefaultSize = NativeBaseSizes.sm
            break;
        case "md":
            DefaultSize = NativeBaseSizes.md
            break;
        case "lg":
            DefaultSize = NativeBaseSizes.lg
            break;
        case "xl":
            DefaultSize = NativeBaseSizes.xl
            break;
        default:
            DefaultSize = NativeBaseSizes.sm
            break;
    }


    console.log(DefaultSize)




    return (
        <View>

            <Text style={[{ color: 'blue',fontSize:DefaultSize }, isUnderlinedText]}
                onPress={() => Linking.openURL(defaulthref, '_blank')}>
                {defaultText}
            </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Link