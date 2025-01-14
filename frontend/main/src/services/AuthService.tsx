import axios from "axios";
import { Constants } from "../utils/constants";

export class AuthService {
    async login(username: string, password: string){
        try {
            const response = await axios.post(`${Constants.API_URL}/auth/login`, {
                username: username,
                password: password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            return response.data
        } catch (error) {
            return
        }
    }

    async register(email: string, username: string, password: string, firstName: string, lastName: string) {
        try {
            const response = await axios.post(`${Constants.API_URL}/auth/register`, {
                email: email,
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
            return response.data
        } catch (error) {
            return
        }
    }
}