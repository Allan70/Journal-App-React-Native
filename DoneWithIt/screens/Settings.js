import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView} from 'react-native' 
import Userprofile from './components/Settings/Userprofile'
import Passwordchange from './components/Settings/Passwordchange'

export default function Settings() {
  return (
    <SafeAreaView style={styles.safeAreaScreen}>
            {/* User Profile section */}
            <Userprofile styles={styles}/>

            {/* Password change section */}
            <Passwordchange styles={styles}/>
            
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
        padding:40,
        paddingBottom: 0,
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
        borderRadius: 5, 
        marginBottom: 5
    },
    passwordContainer: {
        flex: 1, 
        backgroundColor:'white',
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
