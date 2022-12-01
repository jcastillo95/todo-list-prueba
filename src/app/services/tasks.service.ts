import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Tarea{
  id:number;
  description:string;
  status:boolean;
}
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private configUrl!:string;
  constructor(private http:HttpClient) { }
  getTasks():Observable<Tarea>{
    this.configUrl="https://bp-todolist.herokuapp.com/?id_author=8";
    const tarea = this.http.get<Tarea>(this.configUrl);
    return tarea;
  }
  newTasks(data:any){
    return this.http.post('https://bp-todolist.herokuapp.com/?id_author=5', data);
  }

}
