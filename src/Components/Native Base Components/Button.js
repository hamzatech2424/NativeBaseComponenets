import React from "react"
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native"


const Button = ({ size, variant, colorScheme, isdisabled, isLoading, isLoadingText }) => {


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



    const btnSize = size ? size : false

    // console.log(size)


    return (
        <React.Fragment>


            {
                (isLoading) ?

                    (isLoadingText) ?

                        variant == "outline" ?


                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => console.log("Hamza")}
                                style={{ height: "11%", width: "50%", justifyContent: "center", alignItems: "center", backgroundColor: "transparent", borderWidth: 1, borderColor: "skyblue", borderRadius: 5 }}>
                                <View style={{ flexDirection: "row", width: "80%", height: "80%", justifyContent: "center", alignItems: "center" }}>

                                    <Text style={{ color: "skyblue", paddingRight: 20 }}>{isLoadingText}</Text>
                                    <ActivityIndicator size="large" color="skyblue" />

                                </View>

                            </TouchableOpacity>


                        :
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => console.log("Hamza")}
                            style={{ height: "11%", width: "50%", justifyContent: "center", alignItems: "center", backgroundColor: "skyblue", borderRadius: 5 }}>
                            <View style={{ flexDirection: "row", width: "80%", height: "80%", justifyContent: "center", alignItems: "center" }}>

                                <Text style={{ color: "white", paddingRight: 20 }}>{isLoadingText}</Text>
                                <ActivityIndicator size="large" color="white" />

                            </View>
                        </TouchableOpacity>                


                            :
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => console.log("Hamza")}
                                style={{ height: "11%", width: "50%", justifyContent: "center", alignItems: "center", backgroundColor: "skyblue", borderRadius: 5 }}>
                                <ActivityIndicator size="large" color="white" />
                            </TouchableOpacity>


                       


                    : (!size)

                        ?
                        //when no prop is given
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => console.log("Hamza")}
                            style={{ height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", backgroundColor: "skyblue", borderRadius: 5 }}>
                            <Text style={{ color: "white" }}>no Prop</Text>
                        </TouchableOpacity>







                        :
                        (size == "xs") ?
                            //1st Variant sm
                            variant == "outline" ?

                                !isdisabled ?

                                    (colorScheme == "primary" ?

                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => console.log("Hamza")}
                                            style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                            <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                        </TouchableOpacity>

                                        : colorScheme == "secondary" ?

                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => console.log("Hamza")}
                                                style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                <Text style={{ color: "pink" }}>SECONDARY</Text>
                                            </TouchableOpacity>

                                            :

                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => console.log("Hamza")}
                                                style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                <Text style={{ color: "black" }}>DEFAULT</Text>
                                            </TouchableOpacity>
                                    )
                                    :

                                    <TouchableOpacity
                                        activeOpacity={isdisabled ? 1 : 0.7}
                                        //  onPress={!isdisabled && onPress}>
                                        style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                        <Text style={{ color: "grey" }}>DISABLED</Text>
                                    </TouchableOpacity>


                                //2nd Variant xs
                                : variant == "ghost" ?

                                    !isdisabled ?

                                        (colorScheme == "primary" ?

                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => console.log("Hamza")}
                                                style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                            </TouchableOpacity>

                                            : colorScheme == "secondary" ?

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                </TouchableOpacity>

                                                :

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "black" }}>DEFAULT</Text>
                                                </TouchableOpacity>
                                        )
                                        :

                                        <TouchableOpacity
                                            activeOpacity={isdisabled ? 1 : 0.7}
                                            //  onPress={!isdisabled && onPress}>
                                            style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                            <Text style={{ color: "grey" }}>DISABLED</Text>
                                        </TouchableOpacity>

                                    //3rd variant
                                    : variant == "solid" ?

                                        !isdisabled ?

                                            (colorScheme == "primary" ?

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "skyblue", borderRadius: 5 }}>
                                                    <Text style={{ color: "white" }}>PRIMARY</Text>
                                                </TouchableOpacity>

                                                : colorScheme == "secondary" ?

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "pink", borderRadius: 5 }}>
                                                        <Text style={{ color: "white" }}>SECONDARY</Text>
                                                    </TouchableOpacity>

                                                    :

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "black", borderRadius: 5 }}>
                                                        <Text style={{ color: "white" }}>DEFAULT</Text>
                                                    </TouchableOpacity>
                                            )
                                            :

                                            <TouchableOpacity
                                                activeOpacity={isdisabled ? 1 : 0.7}
                                                //  onPress={!isdisabled && onPress}>
                                                style={{ height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "grey", borderRadius: 5 }}>
                                                <Text style={{ color: "white" }}>DISABLED</Text>
                                            </TouchableOpacity>






                                        : //only if size is given
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => console.log("Hamza")}
                                            style={{ backgroundColor: "red", height: NativeSize.xs.height, width: NativeSize.xs.width, justifyContent: "center", alignItems: "center" }}>
                                            <Text style={{ color: "white" }}>Only Size</Text>
                                        </TouchableOpacity>








                            :
                            (size == "sm") ?
                                //1st Variant sm
                                variant == "outline" ?

                                    !isdisabled ?

                                        (colorScheme == "primary" ?

                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => console.log("Hamza")}
                                                style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                            </TouchableOpacity>

                                            : colorScheme == "secondary" ?

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                </TouchableOpacity>

                                                :

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "black" }}>DEFAULT</Text>
                                                </TouchableOpacity>
                                        )
                                        :

                                        <TouchableOpacity
                                            activeOpacity={isdisabled ? 1 : 0.7}
                                            //  onPress={!isdisabled && onPress}>
                                            style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                            <Text style={{ color: "grey" }}>DISABLED</Text>
                                        </TouchableOpacity>






                                    //2nd Variant sm
                                    : variant == "ghost" ?

                                        !isdisabled ?

                                            (colorScheme == "primary" ?

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                                </TouchableOpacity>

                                                : colorScheme == "secondary" ?

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                    </TouchableOpacity>

                                                    :

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "black" }}>DEFAULT</Text>
                                                    </TouchableOpacity>
                                            )
                                            :

                                            <TouchableOpacity
                                                activeOpacity={isdisabled ? 1 : 0.7}
                                                //  onPress={!isdisabled && onPress}>
                                                style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                                <Text style={{ color: "grey" }}>DISABLED</Text>
                                            </TouchableOpacity>




                                        //3rd Variant sm
                                        : variant == "solid" ?

                                            !isdisabled ?

                                                (colorScheme == "primary" ?

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "skyblue", borderRadius: 5 }}>
                                                        <Text style={{ color: "white" }}>PRIMARY</Text>
                                                    </TouchableOpacity>

                                                    : colorScheme == "secondary" ?

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "pink", borderRadius: 5 }}>
                                                            <Text style={{ color: "white" }}>SECONDARY</Text>
                                                        </TouchableOpacity>

                                                        :

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "black", borderRadius: 5 }}>
                                                            <Text style={{ color: "white" }}>DEFAULT</Text>
                                                        </TouchableOpacity>
                                                )
                                                :

                                                <TouchableOpacity
                                                    activeOpacity={isdisabled ? 1 : 0.7}
                                                    //  onPress={!isdisabled && onPress}>
                                                    style={{ height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "grey", borderRadius: 5 }}>
                                                    <Text style={{ color: "white" }}>DISABLED</Text>
                                                </TouchableOpacity>








                                            : //only if size is given
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                                onPress={() => console.log("Hamza")}
                                                style={{ backgroundColor: "red", height: NativeSize.sm.height, width: NativeSize.sm.width, justifyContent: "center", alignItems: "center" }}>
                                                <Text style={{ color: "white" }}>Only Size</Text>
                                            </TouchableOpacity>






                                :
                                (size == "md") ?
                                    //1st Variant md
                                    variant == "outline" ?

                                        !isdisabled ?

                                            (colorScheme == "primary" ?

                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                                </TouchableOpacity>

                                                : colorScheme == "secondary" ?

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                    </TouchableOpacity>

                                                    :

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "black" }}>DEFAULT</Text>
                                                    </TouchableOpacity>
                                            )
                                            :

                                            <TouchableOpacity
                                                activeOpacity={isdisabled ? 1 : 0.7}
                                                //  onPress={!isdisabled && onPress}>
                                                style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                                <Text style={{ color: "grey" }}>DISABLED</Text>
                                            </TouchableOpacity>






                                        //2nd Variant md
                                        : variant == "ghost" ?

                                            !isdisabled ?

                                                (colorScheme == "primary" ?

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                                    </TouchableOpacity>

                                                    : colorScheme == "secondary" ?

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                            <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                        </TouchableOpacity>

                                                        :

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                            <Text style={{ color: "black" }}>DEFAULT</Text>
                                                        </TouchableOpacity>
                                                )
                                                :

                                                <TouchableOpacity
                                                    activeOpacity={isdisabled ? 1 : 0.7}
                                                    //  onPress={!isdisabled && onPress}>
                                                    style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "grey" }}>DISABLED</Text>
                                                </TouchableOpacity>





                                            //3rd Variant md
                                            : variant == "solid" ?

                                                !isdisabled ?

                                                    (colorScheme == "primary" ?

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "skyblue", borderRadius: 5 }}>
                                                            <Text style={{ color: "white" }}>PRIMARY</Text>
                                                        </TouchableOpacity>

                                                        : colorScheme == "secondary" ?

                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                onPress={() => console.log("Hamza")}
                                                                style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "pink", borderRadius: 5 }}>
                                                                <Text style={{ color: "white" }}>SECONDARY</Text>
                                                            </TouchableOpacity>

                                                            :

                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                onPress={() => console.log("Hamza")}
                                                                style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "black", borderRadius: 5 }}>
                                                                <Text style={{ color: "white" }}>DEFAULT</Text>
                                                            </TouchableOpacity>
                                                    )
                                                    :

                                                    <TouchableOpacity
                                                        activeOpacity={isdisabled ? 1 : 0.7}
                                                        //  onPress={!isdisabled && onPress}>
                                                        style={{ height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "grey", borderRadius: 5 }}>
                                                        <Text style={{ color: "white" }}>DISABLED</Text>
                                                    </TouchableOpacity>





                                                : //only if size is given
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    onPress={() => console.log("Hamza")}
                                                    style={{ backgroundColor: "red", height: NativeSize.md.height, width: NativeSize.md.width, justifyContent: "center", alignItems: "center" }}>
                                                    <Text style={{ color: "white" }}>Only Size</Text>
                                                </TouchableOpacity>





                                    :
                                    (size == "lg") ?
                                        //1st Variant lg
                                        variant == "outline" ?

                                            !isdisabled ?

                                                (colorScheme == "primary" ?

                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                                    </TouchableOpacity>

                                                    : colorScheme == "secondary" ?

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                            <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                        </TouchableOpacity>

                                                        :

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                            <Text style={{ color: "black" }}>DEFAULT</Text>
                                                        </TouchableOpacity>
                                                )
                                                :

                                                <TouchableOpacity
                                                    activeOpacity={isdisabled ? 1 : 0.7}
                                                    //  onPress={!isdisabled && onPress}>
                                                    style={{  height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                                    <Text style={{ color: "grey" }}>DISABLED</Text>
                                                </TouchableOpacity>






                                            //2nd Variant lg
                                            : variant == "ghost" ?

                                                !isdisabled ?

                                                    (colorScheme == "primary" ?

                                                        <TouchableOpacity
                                                            activeOpacity={0.8}
                                                            onPress={() => console.log("Hamza")}
                                                            style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "transparent", borderRadius: 5 }}>
                                                            <Text style={{ color: "skyblue" }}>PRIMARY</Text>
                                                        </TouchableOpacity>

                                                        : colorScheme == "secondary" ?

                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                onPress={() => console.log("Hamza")}
                                                                style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "transparent", borderRadius: 5 }}>
                                                                <Text style={{ color: "pink" }}>SECONDARY</Text>
                                                            </TouchableOpacity>

                                                            :

                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                onPress={() => console.log("Hamza")}
                                                                style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "transparent", borderRadius: 5 }}>
                                                                <Text style={{ color: "black" }}>DEFAULT</Text>
                                                            </TouchableOpacity>
                                                    )
                                                    :

                                                    <TouchableOpacity
                                                        activeOpacity={isdisabled ? 1 : 0.7}
                                                        //  onPress={!isdisabled && onPress}>
                                                        style={{ height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "transparent", borderRadius: 5 }}>
                                                        <Text style={{ color: "grey" }}>DISABLED</Text>
                                                    </TouchableOpacity>




                                                //3rd Variant lg
                                                : variant == "solid" ?

                                                    !isdisabled ?

                                                        (colorScheme == "primary" ?

                                                            <TouchableOpacity
                                                                activeOpacity={0.8}
                                                                onPress={() => console.log("Hamza")}
                                                                style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "skyblue", backgroundColor: "skyblue", borderRadius: 5 }}>
                                                                <Text style={{ color: "white" }}>PRIMARY</Text>
                                                            </TouchableOpacity>

                                                            : colorScheme == "secondary" ?

                                                                <TouchableOpacity
                                                                    activeOpacity={0.8}
                                                                    onPress={() => console.log("Hamza")}
                                                                    style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "pink", backgroundColor: "pink", borderRadius: 5 }}>
                                                                    <Text style={{ color: "white" }}>SECONDARY</Text>
                                                                </TouchableOpacity>

                                                                :

                                                                <TouchableOpacity
                                                                    activeOpacity={0.8}
                                                                    onPress={() => console.log("Hamza")}
                                                                    style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "black", backgroundColor: "black", borderRadius: 5 }}>
                                                                    <Text style={{ color: "white" }}>DEFAULT</Text>
                                                                </TouchableOpacity>
                                                        )
                                                        :

                                                        <TouchableOpacity
                                                            activeOpacity={isdisabled ? 1 : 0.7}
                                                            //  onPress={!isdisabled && onPress}>
                                                            style={{ height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center", borderWidth: 0, borderColor: "grey", backgroundColor: "grey", borderRadius: 5 }}>
                                                            <Text style={{ color: "white" }}>DISABLED</Text>
                                                        </TouchableOpacity>


                                                    : //only if size is given
                                                    <TouchableOpacity
                                                        activeOpacity={0.8}
                                                        onPress={() => console.log("Hamza")}
                                                        style={{ backgroundColor: "red", height: NativeSize.lg.height, width: NativeSize.lg.width, justifyContent: "center", alignItems: "center" }}>
                                                        <Text style={{ color: "white" }}>Only Size</Text>
                                                    </TouchableOpacity>



                                        : null



            }



        </React.Fragment>
    )
}



const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center"
    }
})


export default Button


























































