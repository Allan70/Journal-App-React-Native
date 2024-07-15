import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView} from 'react-native' 

export default function Userprofile(props) {
  const styles = props.styles

  return (
    <View style={[styles.profileContainer]}>
    {/* User Profile Picture*/}
    <View style={[{}, ]}>
        <View style={[styles.profileStyling]}>
            <Image source={require("../../../assets/portrait.jpg")} style={[styles.ImageStyle]}/>
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
  )
}
