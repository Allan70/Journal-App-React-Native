import {createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'
import * as SecureStore from 'expo-secure-store'

// interface AuthProps {
//     authState? : {token: string | null, authenticated: boolean | null}
//     onRegister?: (email: string, password: string ) => Promise<any>
//     onLogin: (email: string, password: string)=>Promise<any>
//     onLogout?:()=>Promise<any>
// }

const TOKEN_KEY = 'my-jwt'
export const API_URL= "https://api.developbetterapps.com";
const AuthContext = createContext({}) // AuthProps