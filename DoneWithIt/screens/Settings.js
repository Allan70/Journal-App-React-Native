import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView, Switch} from 'react-native' 
import Userprofile from './components/Settings/Userprofile'
import Passwordchange from './components/Settings/Passwordchange'
import { isEnabled } from 'react-native/Libraries/Performance/Systrace'

export default function Settings() {
    const [isEnabled, setIsEnabled] = React.useState(false)
    const toggleSwitch = () => setIsEnabled(previousState => !previousState)
  return (
    <SafeAreaView style={styles.safeAreaScreen}>
        <ScrollView>
            {/* User Profile section */}
            <Userprofile styles={styles}/>

            {/* Password change section */}
            <Passwordchange styles={styles}/>

            <View style={styles.settingsContainer}>
                <Text  style={{fontSize: 20}}> Journal Settings</Text>
                <View style={{flexDirection: 'column', width: "100%", paddingHorizontal: 15, marginTop: 10}}>
                    {/* Journal Font size */}
                    <View style={[{flexDirection: "row", width: "100%", marginBottom: 5, justifyContent:"space-between"}]}>
                        <View>
                            <Text>Journal Font Size</Text>
                        </View> 
                        <View style={[{flexDirection: "row"}]}>

                             <View>
                                <Pressable>
                                    {/* <Image source={require("")}/> */}
                                </Pressable>
                             </View>

                             <View>
                                <Pressable>
                                    {/* <Image source={require("")} /> */}
                                </Pressable>
                             </View>

                             <View>
                                <Text>Aa</Text>
                             </View>
                        </View>
                    </View>
                    
                    {/* 24 Hr time format  */}
                    <View style={[{flexDirection: "row", marginBottom: 5, justifyContent: "space-between"}]}>
                        <Text>24hr time format</Text>
                        <View>
                            {/* Toggle button */}
                            <Switch 
                                trackColor={{false: 'lightgray', true: 'lightblue'}}
                                thumbColor={isEnabled? 'steelblue': 'gray'}
                                ios_bacgroundColor = "#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                    
                    {/* Date format */}
                    <View style={[{flexDirection: "row", marginBottom: 5, justifyContent: "space-between"}]}>
                        <Text>Date format</Text>
                        <View>
                            {/* Text Dropdown */}
                            <>
                            </>
                        </View>
                    </View>
                    
                    {/* Notification sound */}
                    <View style={[{flexDirection: "row", marginBottom: 5, justifyContent: "space-between"}]}>
                        <Text>Notification sound</Text>
                        <View>
                            {/* Text Dropdown */}
                            <>
                            </>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        backgroundColor: 'white',
        margin: 20,
        marginBottom: 10,
        boxShadow: 4,
        boxShadowColor: 'black',
        padding: 20,
        borderRadius: 10,
    }
})
