import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { userList } from "./user.mock";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class UserService {
  constructor() {}

  getUsers(): Observable<User[]> {
    return Observable.of<User[]>(userList);
  }

  getUser(id: number): Observable<User> {
    let user = userList.find(m => m.id === id);
    let user2 = {};
    Object.assign(user2, user);
    return Observable.of<User>(user2 as User);
  }

  saveUser(user: User) {
    let user2 = userList.find(m => m.id == user.id);

    if (user2) {
      user2.name = user.name;
      user2.gender = user.gender;
    } else {
      userList.push(user);
    }
  }
  deleteUser(user: User) {
    let index = userList.findIndex(m => m.id === user.id);
    if (index > -1) {
      userList.splice(index, 1);
    }
  }
}
