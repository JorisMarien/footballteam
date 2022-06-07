import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballteamComponent } from './components/footballteam/footballteam.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {path: '',component:FootballteamComponent},
  {path: 'post',component:PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
