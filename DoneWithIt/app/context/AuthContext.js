import {createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

const TOKEN_KEY = 'my-jwt'
export const API_URL= "https://localhost:5000";
const AuthContext = createContext({}) 

export async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  
  export async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      return result;
    } else {
      alert('No values stored under that key.');expo 
    }
  }

export const AuthProvider = ({children}) =>{
    const [authState, setAuthState] = useState({
        token: null, 
        authenticated: null
    })


    useEffect(()=>{
        const loadToken = async ()=>{
            const token = await SecureStore.getItemAsync(TOKEN_KEY)
            console.log("Token stored", token)

            if(token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
            }

            setAuthState({
                token: token,
                authenticated: true
            })
        }

        loadToken();
    }, [])

    const register = async (username, email, password) =>{
        try{
            return await axios.post(`${API_URL}/create/user`, {username, email, password})
        }catch(err){
            return {error: true, msg: (e).response.data.msg}
        }
    }
    
    const login = async (email, password) =>{
        try{
            const result = await axios.post(`${API_URL}/login/user`, {email, password})
    
            console.log("File AuthContext login result: ", result)
            setAuthState({
                token: result.data.token, 
                authenticated: true
            });
    
            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.token}`
    
            await SecureStore.setItemAsync(TOKEN_KEY, result.data.token)
    
            return result;
    
        }catch(err){
            return {error: true, msg: (e).response.data.msg}
        }
    }
    
    const signOut = async ()=>{
        await SecureStore.deleteItemAsync(TOKEN_KEY);
    
        axios.defaults.headers.common['Authorization'] = '';
    
        setAuthState({
            token: null,
            authenticated: false
        })
    } 

    
    const value = {
        onRegister: register,
        onLogin: login,
        onSignout: signOut,
        authState
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

