import axios from "axios";
import { Constants } from "../utils/constants";
import CryptoJS from 'crypto-js';

export class AuthService {
    hashPassword(password: string) {
        return CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    }

    async login(username: string, password: string){
        try {
            const hashedPassword = this.hashPassword(password);
            const response = await axios.post(`${Constants.API_URL}/auth/login`, {
                username: username,
                password: hashedPassword,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            return response.data
        } catch (error) {
            console.error(error);
            return
        }
    }

    async register(email: string, username: string, password: string, firstName: string, lastName: string) {
        try {
            const hashedPassword = this.hashPassword(password);
            const response = await axios.post(`${Constants.API_URL}/auth/register`, {
                email: email,
                username: username,
                password: hashedPassword,
                firstName: firstName,
                lastName: lastName
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            return response.data
        } catch (error) {
            console.error(error);
            return
        }
    }
}