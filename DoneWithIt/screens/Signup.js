import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Pressable } from 'react-native';
import BoxContainer from './components/BoxContainer';
import { useFonts, JuliusSansOne_400Regular } from '@expo-google-fonts/julius-sans-one';


export default function Signup() {
  const [username, onChangeUsername] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  let [fontsLoaded] = useFonts({
    JuliusSansOne_400Regular,
  });

  return (
      <SafeAreaView style={styles.container}>
          <BoxContainer style={{width: "100%"}}>
              <BoxContainer>
                <View>
                    <Text   
                      style={{
                        fontFamily: 'JuliusSansOne_400Regular', 
                        fontSize: 40 
                      }}
                      >
                        Kalamu
                    </Text>
                </View>
                <View style={{paddingVertical: 23}}></View>
                  <Text
                    style={styles.textTittlePadding}  
                  >
                    Create a Kalamu account to begin your journaling journey.
                  </Text>

                  <TextInput 
                      onChangeText={onChangeUsername} 
                      value={username}
                      placeholder='username'
                      style={styles.input}
                  />
                  
                  <TextInput 
                        onChangeText={onChangeEmail} 
                        value={email}
                        placeholder='email'
                        style={styles.input}
                  />

                  <TextInput 
                        onChangeText={onChangePassword} 
                        value={password}
                        placeholder='password'
                        style={styles.input}
                        secureTextEntry={true}
                  />

                  <TextInput 
                        onChangeText={onChangeConfirmPassword} 
                        value={confirmPassword}
                        placeholder='confirm password'
                        style={styles.input}
                        secureTextEntry={true}
                  />

              </BoxContainer>
              
              <View style={{paddingVertical: 60}}></View>
              
              <BoxContainer style={styles.btnHolder}>
                  <View style={styles.loginBtn}>
                      <Pressable style={styles.button} >
                        <Text style={styles.text}>Sign up</Text>
                      </Pressable>
                  </View>
              </BoxContainer>
              
          </BoxContainer>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'left',
      height: '100%',
      width: '100%'
  },
  banner: {
      width: '100%',
  },
  input: {
      height: 62,
      margin: 12,
      borderWidth: 0,
      padding: 20,
      fontSize: 12,
      width: 300,
      marginVertical: 8,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
      outlineColor: '#F5F5F5'
  },
  btnHolder: {
      marginTop: 0,
      width: '100%',
      alignItems: 'center', 
  },
  loginBtn: {
      width: 300, 
      height: 150,
      borderRadius: 200
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    fontSize: 12,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textTittlePadding: {
    paddingBottom: 25,
    width: 300, 
  },

});
