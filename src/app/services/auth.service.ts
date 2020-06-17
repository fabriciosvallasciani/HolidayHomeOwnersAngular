import { Injectable } from '@angular/core';

@Injectable
({
    providedIn: "root"
})
export class AuthService {

    login(user: string, password: string): boolean {
        // TODO: backend 
        if (user === 'user' && password === 'password') {
            localStorage.setItem('username', 'John Doe');
            localStorage.setItem('authorization', 'basic YWRtaW5AYWRtaW4uY29tOjEyMzQ1IQ==');
            return true;
        }

    return false;
    }

    logout(): any {
        localStorage.removeItem('username');
        localStorage.removeItem('authorization');
    }

    getUser(): any {
        return localStorage.getItem('username');
    }
    
    isLoggedIn(): boolean {
        return this.getUser() !== null;
    }
}