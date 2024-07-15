import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native' 

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
            {/* User Profile Picture*/}
            <View style={[{}, ]}>
                <Text style={[{}, ]}>Profile Picture</Text>
                <View style={[{}, ]}>
                    {/* <Image source={require("../assets/potrait.jpg")} style={[{}, ]}/> */}
                </View>
            </View>
            {/* User Profile Items */}
            <View style={[{}]}>
                {/* Avatar Buttons */}
                <View style={[{}]}>

                </View>
                {/* Text Inputs */}
                <View style={[{}]}>
                    {/* Profile namw */}
                    {/* Profile Email */}
                </View>
            </View>
        </View>
        <View style={styles.passwordContainer}>
            {/* User Email and Password */}
        </View>
        <View style={styles.settingsContainer}>
            {/* 
                User Journal Text font, 
                theme, 
                time and date settings, 
                notification sounds 
            */}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    profileContainer: {},
    passwordContainer: {},
    settingsContainer: {}
})
