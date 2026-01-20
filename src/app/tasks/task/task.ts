import { Component,EventEmitter,Input, Output } from '@angular/core';
import { type Task_exp } from './task.mode';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required:true}) task!:Task_exp;
@Output() complete=new EventEmitter<string>();

onCompletetask(){
  this.complete.emit(this.task.id);
}
}
