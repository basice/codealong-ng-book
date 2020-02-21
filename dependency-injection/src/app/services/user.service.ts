import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  getUser(): any {
    return this.user;
  }

  setUser(newUser: any) {
    this.user = newUser;
  }
}
