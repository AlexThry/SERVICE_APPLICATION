import axios from "axios";

export class UserService {
    getUser() {
        return {
            username: sessionStorage.getItem('user') || undefined,
            access_token: sessionStorage.getItem('access_token') || undefined,
        };
    }

    async getUsers() {
        try {
            const response = await axios.get('http://localhost:3000/users')
            return response.data
        } catch (error) {
            return
        }
    }
}


