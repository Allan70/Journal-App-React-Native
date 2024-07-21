import React from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, Alert } from 'react-native';
import BoxContainer from './components/BoxContainer';

export default function Login({navigation}) {
    const [username, onChangeUsername] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    return (
        <View style={{backgroundColor: 'white', height: '100%', marginBottom: 0}}>
            <Image source={require('../assets/kalamu-banner.png')} style={styles.banner}/>
            <BoxContainer style={styles.container}>
                <BoxContainer>
                    <Text>Login to your Kalamu account</Text>

                    <TextInput 
                        onChangeText={onChangeUsername} 
                        value={username}
                        placeholder='username/email'
                        style={styles.input}
                    />
                    
                    <TextInput 
                          onChangeText={onChangePassword} 
                          value={password}
                          placeholder='password'
                          style={styles.input}
                          secureTextEntry={true}
                    />

                    <BoxContainer style={[styles.btnHolder, {backgroundColor: 'white', width:'100%', height: '100%'}]}>
                        <View style={[styles.loginBtn, {backgroundColor: 'white'}]}>
                                <Pressable style={styles.button} onPress={()=>{
                                        navigation.navigate("KALAMU")
                                    }}>
                                    <Text style={styles.text}>Login</Text>
                                </Pressable>
                        </View>
                    </BoxContainer>

                    <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                        <Text style={{color: "black"}}>Don't have an account? </Text>
                        <Pressable
                            onPress={()=>navigation.navigate("Signup")}
                        >
                            <Text style={{color: "steelblue", textDecorationLine: "underline"}}>Sign up</Text>
                        </Pressable>
                    </View>

                </BoxContainer>
            </BoxContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        textAlign: 'left',
        paddingTop: 40
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
        marginTop: -20,
        paddingTop: 0,
        width: '100%',
        alignItems: 'center', 
    },
    loginBtn: {
        width: 300, 
        height: 100,
        borderRadius: 100
    },
    googleBtn: {
        width: 300, 
        height: 80,
        borderRadius: 100,
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
});
