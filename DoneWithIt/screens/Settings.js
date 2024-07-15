import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView} from 'react-native' 

export default function Settings() {
  return (
    <SafeAreaView style={{height: "100%", margin: 0}}>
        {/* <ScrollView style={[styles.container, {backgroundColor: "pink"}]}> */}
            <View style={[styles.profileContainer, {flexDirection: 'row'}]}>
                {/* User Profile Picture*/}
                <View style={[{}, ]}>
                    <Text style={[{}, ]}>Profile Picture</Text>
                    <View style={[{width: 200, height: 200, borderRadius: 20}, ]}>
                        <Image source={require("../assets/portrait.jpg")} style={[{width: "100%", height: "100%", borderRadius: 400,marginTop: 10}, ]}/>
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
                            <TextInput style={[{}]} placeholder='user'/>
                        </View>
                        {/* Profile Email */}
                        <View style={[{}]}>
                        <View>
                            <Text>
                                Profile email
                            </Text>
                            </View>
                            <TextInput style={[{}]} placeholder='user email'/>
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
