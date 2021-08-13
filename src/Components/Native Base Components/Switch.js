import React, { useState, useEffect } from "react"
import { StyleSheet, Switch } from "react-native"


const Swittch = ({ size, colorScheme,isDisabled,isChecked }) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const Styles = {
        sm: {
            transform: [{ scaleX: 1 }, { scaleY: 1 }]
        },
        md: {
            transform: [{ scaleX: 2 }, { scaleY: 2 }]
        },
        lg: {
            transform: [{ scaleX: 3 }, { scaleY: 3 }]
        },
    }



    return (


        <Switch
            style={
                (size == "sm") ? Styles.sm :
                    (size == "md") ? Styles.md :
                        (size == "lg") ? Styles.lg :
                            Styles.sm
            }
            onValueChange={toggleSwitch}
            value={isChecked?isChecked:isEnabled}

            trackColor={
                (colorScheme == "primary") ? { true: '#67E8F9', false: 'grey' } :
                    (colorScheme == "secondary") ? { true: '#F0A2CC', false: 'grey' } :
                        (colorScheme == "emerald") ? { true: '#6EE7B7', false: 'grey' } :
                            { true: '#67E8F9', false: 'grey' }
            }
            thumbColor={
                (colorScheme == "primary") ?   "#0891B2" :
                (colorScheme == "secondary") ? "#DB2777" :
                    (colorScheme == "emerald") ? "#059669" :
                        "#0891B2"
            }

            disabled={isDisabled?isDisabled:false}


        />



    )
}



export default Swittch