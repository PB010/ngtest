import {Injectable} from "@angular/core";
import {IUserModel} from "../shared/models/users/iuser.model";

@Injectable({providedIn: 'root'})

export class AuthService {
  currentUser: IUserModel;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: 'Papa'
    }
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
