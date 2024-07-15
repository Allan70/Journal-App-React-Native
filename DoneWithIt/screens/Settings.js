import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView} from 'react-native' 

export default function Settings() {
  return (
    <SafeAreaView style={styles.safeAreaScreen}>
        {/* <ScrollView style={[styles.container, {backgroundColor: "pink"}]}> */}
            <View style={[styles.profileContainer]}>
                {/* User Profile Picture*/}
                <View style={[{}, ]}>
                    <View style={[styles.profileStyling]}>
                        <Image source={require("../assets/portrait.jpg")} style={[styles.ImageStyle]}/>
                    </View>
                </View>
                {/* User Profile Items */}
                <View style={[{flexDirection: 'column', marginLeft: 15}]}>
                    {/* Avatar Buttons */}
                    <View style={[{}]}>
                        <View style={[{flexDirection: 'row', width: "100%"}]}>
                            <Pressable style={[{backgroundColor: '#4684E0',  marginRight: 10, borderRadius: 5}]}>
                                <Text style={[{color: 'white', paddingHorizontal: 10, paddingVertical: 5,}]}>Change Avatar</Text>
                            </Pressable>
                            <Pressable style={[{backgroundColor: '#DEDEDE',  paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5}]}>
                                <Text style={[{color: 'red'}]}>Delete Avatar</Text>
                            </Pressable>
                        </View>
                    </View>
                    {/* Text Inputs */}
                    <View style={[{marginTop: 15}]}>
                        {/* Profile name */}
                        <View style={[{}]}>
                            <View>
                                <Text>
                                    Profile name
                                </Text>
                            </View>
                            <TextInput style={[styles.profileTextInput]} placeholder='user'/>
                        </View>
                        {/* Profile Email */}
                        <View style={[{}]}>
                        <View>
                            <Text>
                                Profile email
                            </Text>
                            </View>
                            <TextInput style={[styles.profileTextInput]} placeholder='user email'/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.passwordContainer}>
                {/* User Email and Password */}
                <View style={{}}></View>
            </View>
            <View style={styles.settingsContainer}>
                {/* 
                    User Journal Text font, 
                    theme, 
                    time and date settings, 
                    notification sounds 
                */}
                <View style={{}}></View>
            </View>
        {/* </ScrollView> */}
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeAreaScreen: {
        height: "100%", 
        margin: 0
    },
    profileStyling: {
        width: 200, 
        height: 200, 
        borderRadius: 20
    },
    ImageStyle: {
        width: "100%", 
        height: "100%", 
        borderRadius: 400,
        marginTop: 10
    },
    container : {
        flex:1,
        width:"100%",
        height:"100%",
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    profileContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 10,
        boxShadow: 4,
        boxShadowColor: 'black',
        padding: 40,
        shadowOffset: {width: -2, height: 0},  
        shadowColor: 'gray',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        borderRadius: 10,
    },
    profileTextInput:{
        width: "100%", 
        backgroundColor: "lightgray", 
        padding: 2, 
        paddingLeft: 10,
        borderRadius: 5
    },
    passwordContainer: {
        flex: 1, 
        backgroundColor:'blue',
        margin: 20,
        marginBottom: 10,
        boxShadow: 4,
        boxShadowColor: 'black',
        padding: 20,
        borderRadius: 10,
    },
    settingsContainer: {
        flex: 1,
        backgroundColor: 'green',
        margin: 20,
        marginBottom: 10,
        boxShadow: 4,
        boxShadowColor: 'black',
        padding: 20,
        borderRadius: 10,
    }
})
