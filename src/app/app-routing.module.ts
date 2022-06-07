import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FootballteamComponent } from './components/footballteam/footballteam.component';

const routes: Routes = [
  {path: '',component:FootballteamComponent},
  {path: '**',component:FootballteamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
