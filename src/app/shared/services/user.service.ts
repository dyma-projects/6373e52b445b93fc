import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$:BehaviorSubject<string[]> = new BehaviorSubject([])

  constructor() { }

  addUser(user){
    const value= this.users$.value;
    this.users$.next([...value,user])
  }
}
