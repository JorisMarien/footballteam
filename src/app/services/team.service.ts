import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const teamsUrl = 'http://localhost:3000/teams'

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
/**GET: get a team by id from the database */
  getTeamById(id: number) {
    return this.http.get<any>(`${teamsUrl}/${id}`);
  }

  /** POST: add a new team to the database */
  addTeam(id: number, name: string){
    return this.http.post<any>(teamsUrl, {id, name});
  }
}
