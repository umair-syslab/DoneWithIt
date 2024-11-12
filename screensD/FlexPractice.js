import React from "react";
import {View} from "react-native"
    export default function FlexPractice() {

        return(
            // this is the parent view 
            <View style={{
                backgroundColor:"dodgerblue",
                flex:1 // fullscreen blue
                // flex:0.5 halfscreen blue 
            }}>
                {/* this is the child  */}

                <View
                style={{
                    backgroundColor:"black",
                    // this is compair with below chiled and twice from their below chied 
                    flex:2
                }}/>
                <View
                style={{
                    backgroundColor:"yellow",
                    flex:1
                }}/>
                <View
                style={{
                    backgroundColor:"pink",
                    flex:1
                }}/>
            </View>
        );
    }