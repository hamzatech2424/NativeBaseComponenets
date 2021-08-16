import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import Slider from "react-native-slider"


const Sliderr = ({ colorScheme,isDisabled,size }) => {

  const [sliderValue, setsliderValue] = useState(0)
  const [onslidingStartValue, setonslidingStartValue] = useState(0)
  const [onslidingCompleteValue, setonslidingCompleteValue] = useState(0)

  const NativeBaseColorScheme = {
    primary: {
      thumbTintColor: "#0891B2",
      remaingTrackColor: '#67E8F9'
    },
    secondary: {
      thumbTintColor:"#DB2777" ,
      remaingTrackColor: '#F0A2CC'
    },
    emerald: {
      thumbTintColor:"#059669",
      remaingTrackColor: '#6EE7B7'
    },
  
}


let defaultSliderThumbColor = NativeBaseColorScheme.primary.thumbTintColor
let defaultSliderTrackColor = NativeBaseColorScheme.primary.remaingTrackColor
let defaultdisabled = isDisabled ? isDisabled : false

    switch (colorScheme) {
        case "primary":
          defaultSliderThumbColor = NativeBaseColorScheme.primary.thumbTintColor
          defaultSliderTrackColor = NativeBaseColorScheme.primary.remaingTrackColor
            break;
        case "secondary":
          defaultSliderThumbColor = NativeBaseColorScheme.secondary.thumbTintColor
          defaultSliderTrackColor = NativeBaseColorScheme.secondary.remaingTrackColor
            break;
        case "emerald":
          defaultSliderThumbColor = NativeBaseColorScheme.emerald.thumbTintColor
          defaultSliderTrackColor = NativeBaseColorScheme.emerald.remaingTrackColor
            break;
        default:
          defaultSliderThumbColor = NativeBaseColorScheme.primary.thumbTintColor
          defaultSliderTrackColor = NativeBaseColorScheme.primary.remaingTrackColor
            break;
    }




    
    // Native Base Sizes

//     const NativeSizes = {
//       sm: {
//         trackSize: {
//           height:6
//         },
//         thumbSize: {
//           width:16,
//           height:16,
//           borderRadius:8
//         }
//       },

//       md: {
//         trackSize: {
//           height:8
//         },
//         thumbSize: {
//           width:20,
//           height:10,
//           borderRadius:10
//         }
//       },
//       lg: {
//         trackSize: {
//           height:10
//         },
//         thumbSize: {
//           width:24,
//           height:24,
//           borderRadius:12
//         }
//       },

//   }

//   //TextInput Sizes computation

//   let defaultSlidertrackSize = NativeSizes.sm.trackSize
//   let defaultSliderthumbSize = NativeSizes.sm.thumbSize

//   switch (size) {
//       case "sm":
//         defaultSlidertrackSize = NativeSizes.sm.trackSize
//         defaultSliderthumbSize = NativeSizes.sm.thumbSize
//           break;
//       case "md":
//         defaultSlidertrackSize = NativeSizes.md.trackSize
//         defaultSliderthumbSize = NativeSizes.md.thumbSize
//           break;
//       case "lg":
//         defaultSlidertrackSize = NativeSizes.lg.trackSize
//         defaultSliderthumbSize = NativeSizes.lg.thumbSize
//           break;
//       default:
//         defaultSlidertrackSize = NativeSizes.sm.trackSize
//         defaultSliderthumbSize = NativeSizes.sm.thumbSize
//           break;
//   }

// console.log(defaultSlidertrackSize)



  return (



    <View style={styles.container}>
       

      <Slider
        value={sliderValue}
        onValueChange={(value) => setsliderValue(value)}
        minimumValue={-10}
        maximumValue={42}
        minimumTrackTintColor={defaultSliderThumbColor}
        maximumTrackTintColor={defaultSliderTrackColor}
        thumbTintColor={defaultSliderThumbColor}
        disabled={defaultdisabled}
        // trackStyle={defaultSlidertrackSize}
        // thumbStyle={defaultSliderthumbSize}
        onSlidingStart={()=>{setonslidingStartValue(sliderValue)}}
        onSlidingComplete={()=>setonslidingCompleteValue(sliderValue)}
        // step={2}

      />


      <Text>Value: {sliderValue}</Text>
      <Text>Sliding Start Value: {onslidingStartValue}</Text>
      <Text>Sliding Complete Value: {onslidingCompleteValue}</Text>




    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "80%"
  },
})

export default Sliderr
