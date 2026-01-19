import { Component, computed, EventEmitter, Input,input, Output } from '@angular/core';
 
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 
@Input({required:true}) id!:string;
@Input({required:true}) avatar!:string;
@Input({required:true}) name!:string;
@Output() select=new EventEmitter();

  get imagePath(){
  return 'assets/users/'+this.avatar ;
}
onSelectuser_inuser(){
  this.select.emit(this.id);
}

}
