import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headercomponent } from "./header/header.componet";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
 


@Component({
  selector: 'app-root',
  imports: [headercomponent, User],
  templateUrl: './app.html',
  styleUrl: './app.css',
  
})
export class App {
  protected readonly title = signal('my-first-app');
  users=DUMMY_USERS;
  

  onselectuser(ids:string){
    console.log('selected user with id',ids);

  }
}
