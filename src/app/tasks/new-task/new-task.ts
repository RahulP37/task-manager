import { Component, EventEmitter ,Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newtaskdata } from '../task/task.mode';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel= new EventEmitter<void>()
  @Output() add=new EventEmitter<{title:string;summary:string;date:string;}>();
  enteredtitle='';
  enteredsummary='';
  entereddate='';
  onCancel(){
    this.cancel.emit();
  }
  onsubmit(){
    this.add.emit({
      title:this.enteredtitle,
      summary:this.enteredsummary,
      date:this.entereddate
    });

  }


}
