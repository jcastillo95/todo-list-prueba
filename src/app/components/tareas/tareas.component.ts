import { Component, OnInit } from '@angular/core';
import { Tarea, TasksService} from 'src/app/services/tasks.service';
@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
})
export class TareasComponent implements OnInit {
  tarea!: Tarea;
  constructor(private taskSvc: TasksService) {}
  ngOnInit(): void {}
  getTasks() {
    this.taskSvc.getTasks().subscribe((data: Tarea) => {
      console.log('subscribe Tarea', data);
      this.tarea = data;
    });
  }
  addTask(){
  }
}
