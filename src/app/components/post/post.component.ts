import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  teamForm!: FormGroup;
response!: string;

  constructor(private formBuilder: FormBuilder, private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamForm = this.formBuilder.group({
      id: ['', Validators.required],
      name:['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.teamForm.get('name')?.value)
    this.teamService.addTeam(this.teamForm.get('id')?.value,this.teamForm.get('name')?.value)
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

}
