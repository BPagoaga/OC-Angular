import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  isAuth = false;

  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 500);
    });
  }

  signOut() {
    this.isAuth = false;
  }

  constructor() {}

  isUserAuthenticated(): boolean {
    return this.isAuth;
  }
}
