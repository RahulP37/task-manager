import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { headercomponent } from "./header/header.componet";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';


@Component({
  selector: 'app-root',
  imports: [headercomponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('my-first-app');
  users = DUMMY_USERS;
  name_used_in_task!: string;


  onselectuser(ids: string) {
    const selectedUser = this.users.find((u) => u.id === ids);

  
  this.name_used_in_task = selectedUser? selectedUser.name:'';

    console.log('selected user with id', ids);
  }
}
