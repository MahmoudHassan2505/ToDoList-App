import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {

  title:string="To Do List Application"
  imgLink:string = "https://cdn-icons-png.flaticon.com/512/4697/4697260.png"

  tasks:string[]=[];
  newTask:string="";

  addTask(){
    if(this.newTask.trim() !==""){
      this.tasks.push(this.newTask);
      this.newTask=""
    }
  }
  removeTask(index:number) {
    this.tasks.splice(index,1);
  }
  editTask(index:number ) {
    let updateTask = prompt("Edit Task", this.tasks[index]);
    if(updateTask !==null){
      this.tasks[index]= updateTask.trim();
    }
  }
}
