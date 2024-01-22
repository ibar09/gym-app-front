export class GlobalApp {
    constructor() {}
    public isLoggedIn(): boolean {
        return localStorage.getItem('token')!=undefined;
    }
    public logOut()
    {
        localStorage.removeItem('token');
        location.reload()
    }
}