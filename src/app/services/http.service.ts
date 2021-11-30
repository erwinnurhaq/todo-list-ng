import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import {
  ActivityDetail,
  ActivityGroup,
  ActivityGroupUpdate,
  Empty,
  TaskForm,
  TodoUpdate,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private baseURL: string = env.baseAPIURL || '';
  private email: string = 'enurhaq@gmail.com';

  constructor(private http: HttpClient) {}

  getActivities(): Observable<ActivityGroup> {
    return this.http.get<ActivityGroup>(`${this.baseURL}/activity-groups`, {
      params: new HttpParams().set('email', this.email),
    });
  }

  postActivity(): Observable<ActivityGroupUpdate> {
    return this.http.post<ActivityGroupUpdate>(
      `${this.baseURL}/activity-groups`,
      { title: 'New Activity', email: this.email }
    );
  }

  editActivity(id: string, title: string): Observable<ActivityGroupUpdate> {
    return this.http.patch<ActivityGroupUpdate>(`/activity-groups/${id}`, {
      title,
    });
  }

  deleteActivity(id: string): Observable<Empty> {
    return this.http.delete<Empty>(`/activity-groups/${id}`);
  }

  getActivityDetail(id: string): Observable<ActivityDetail> {
    return this.http.get<ActivityDetail>(`/activity-groups/${id}`);
  }

  postTask(taskForm: TaskForm): Observable<TodoUpdate> {
    return this.http.post<TodoUpdate>(`/todo-items`, {
      activity_group_id: taskForm.activity_group_id,
      title: taskForm.title,
      priority: taskForm.priority,
    });
  }

  editTask(taskForm: TaskForm): Observable<TodoUpdate> {
    return this.http.patch<TodoUpdate>(`/todo-items/${taskForm.id}`, {
      title: taskForm.title,
      is_active: taskForm.is_active,
      priority: taskForm.priority,
    });
  }

  deleteTask(id: string): Observable<Empty> {
    return this.http.delete<Empty>(`/todo-items/${id}`)
  }
}
