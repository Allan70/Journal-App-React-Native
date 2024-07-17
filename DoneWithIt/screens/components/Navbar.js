import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';

export default function Navbar() {
    let [fontsLoaded] = useFonts({
        JuliusSansOne_400Regular,
    });

  return (
    <View style={[styles.container,]}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 110,
          width: '100%',
          paddingVertical: 30,
          backgroundColor: 'white'
        }}>
          {/* Logo */}
          <View style={{flex: 1, height: 80, backgroundColor: 'white', width: '100%', marginRight:'10%'}}>
            <Text style={{fontFamily: 'JuliusSansOne_400Regular', fontSize: 40, padding: 6}}>Kalamu</Text>
          </View>
          {/* Search and Notifications */}
          <View style={{flex: 2, width: '100%', alignSelf: 'flex-end' }}>
            <View style={{flexDirection:'row', width:'100%', marginLeft: '60%'}}>


                {/* Notifications */}
                {/* <Pressable style={{
                    justifyContent: 'center', 
                    alignItems:'center', 
                    backgroundColor: 'lightgray', 
                    width: 50,
                    height:50,
                    borderRadius: 25,
                    marginLeft: 15
                 }}>
                    <Image source={require("../../assets/notification.png")} style={{width: 45, height: 45, padding: 0, margin:0}}/>
                </Pressable> */}

            </View>
          </View>
          </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'streach', 
        zIndex: 100
    }
})