import React from 'react'
import { SafeAreaView,View, Text, StyleSheet, Pressable, Image, TextInput, ScrollView} from 'react-native' 



export default function Passwordchange(props) {
    const styles = props.styles
  return (
    <View style={styles.passwordContainer}>
    {/* User Email and Password */}
    <View style={{}}>
        <Text>Change Password</Text>
        <View style={[{paddingLeft: 150, paddingTop: 10}]}>
            <View>
                <Text>Current Password</Text>
                <TextInput
                    style={[styles.profileTextInput]}
                    placeholder="Current Password"
                />
            </View>
            <View>
                <Text>New Password</Text>
                <TextInput 
                    style={[styles.profileTextInput]}
                    placeholder="New Password"
                />
            </View>
            <View>
                <Text>Confirm New Password</Text>
                <TextInput 
                    style={[styles.profileTextInput]}
                    placeholder="Confirm New Password"
                />
            </View>
        </View>
    </View>
</View>
  )
}
