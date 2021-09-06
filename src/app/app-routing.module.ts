import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxDashboardComponent } from './components/sandbox-dashboard/sandbox-dashboard.component';


const routes: Routes = [
  {path: '', redirectTo: '/sandbox', pathMatch: 'full'},
  {path: 'sandbox', component: SandboxDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
