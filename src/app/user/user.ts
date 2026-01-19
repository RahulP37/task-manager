import { Component, computed, EventEmitter, Input,input, Output,output } from '@angular/core';
 
interface User_interface{
 id:string;
  name:string;
  avatar:string;
};
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 
@Input({required:true}) user!:User_interface
@Output() select=new EventEmitter<string>();

  get imagePath(){
  return 'assets/users/'+this.user.avatar ;
}
onSelectuser_inuser(){
  this.select.emit(this.user.id);
}

}
