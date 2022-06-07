import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const teamsUrl = 'http://localhost:3000/teams'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeamById(id: number) {
    return this.http.get<any>(`${teamsUrl}/${id}`);
  }
}
