import { Component, computed, EventEmitter, Input,input, Output,output } from '@angular/core';
 
@Component({
  selector: 'app-user',
  standalone:true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
 
@Input({required:true}) user!:{
  id:string;
  name:string;
  avatar:string;
};
@Output() select=new EventEmitter<string>();

  get imagePath(){
  return 'assets/users/'+this.user.avatar ;
}
onSelectuser_inuser(){
  this.select.emit(this.user.id);
}

}
