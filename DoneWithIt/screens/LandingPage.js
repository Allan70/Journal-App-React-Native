import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';


export default function LandingPage() {
    let [fontsLoaded] = useFonts({
        JuliusSansOne_400Regular,
    });

  return (
    <View style={styles.container}>
        <Image source={require('../assets/moleskin.png')} />
        <Text style={styles.textStyle}>Kalamu</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    fontFamily: 'JuliusSansOne_400Regular', 
    fontSize: 40 
  }
});