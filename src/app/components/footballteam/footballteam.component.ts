import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-footballteam',
  templateUrl: './footballteam.component.html',
  styleUrls: ['./footballteam.component.css']
})
export class FootballteamComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      id: ['', Validators.required],
    });

  }
  onSubmit() {
    this.teamService.getTeamById(this.teamForm.get('id')?.value)
      .subscribe({
        next: (data) => {
          this.response = data;
          console.log(data);
        },
        error: (error) => {
          this.response = error.error;
        }
      })
  }
  teamForm!: FormGroup;
  response!: string;


}
