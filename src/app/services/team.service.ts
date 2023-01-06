import { Injectable } from '@angular/core';
import { Team } from '../models/team';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  constructor(private http: HttpClient) {}

  findById(id: any): Observable<Team> {
    return this.http.get<Team>(`${API_CONFIG.baseUrl}/teams/${id}`);
  }
}
