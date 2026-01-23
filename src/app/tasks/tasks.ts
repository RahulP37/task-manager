import { Component, computed, Input } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { DUMMY_USERS } from '../dummy-users';
import { Task } from "./task/task";
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required:true}) name!:string;
   @Input({required:true}) id!:string;
   isaddingtask:boolean=false;
 tasks_list = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];



  get selectedUserTasks(){
    return this.tasks_list.filter((task)=>task.userId===this.id);
  }


  onCompleteTask_in_tasks(id:string){
    this.tasks_list=this.tasks_list.filter((task)=>task.id!==id) ;
   }


   onstartaddtask(){
    this.isaddingtask=true;

   }


   oncanceladdtask(){
    this.isaddingtask=false;
   }
}
