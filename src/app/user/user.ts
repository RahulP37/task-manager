import { Component, computed, EventEmitter, Input,input, Output,output } from '@angular/core';
 
import {type User_interface } from './user.model';
import { Card } from "../shared/card/card";
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 
@Input({required:true}) user!:User_interface
@Input({required:true}) selected!:boolean;
@Output() select=new EventEmitter<string>();

  get imagePath(){
  return 'assets/users/'+this.user.avatar ;
}
onSelectuser_inuser(){
  this.select.emit(this.user.id);
}

}
