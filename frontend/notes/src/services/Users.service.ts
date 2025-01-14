export class UserService {
    getUser() {
        return {
            username: sessionStorage.getItem('user') || undefined,
            access_token: sessionStorage.getItem('access_token') || undefined,
        };
    }
}


