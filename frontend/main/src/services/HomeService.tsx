import axios from "axios";

export class HomeService {
    async getSplash() {
        try {
            const response = await axios.get("http://localhost:1880/get-message");
            return await response.data
        } catch (error) {
            return
        }
    }
}