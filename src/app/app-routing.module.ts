import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxDashboardComponent } from './components/sandbox-dashboard/sandbox-dashboard.component';
import { NewSandboxComponent } from './components/new-sandbox/new-sandbox.component';


const routes: Routes = [
  {path: '', redirectTo: '/sandbox', pathMatch: 'full'},
  {path: 'sandbox', component: SandboxDashboardComponent},
  {path: 'newSandbox', component: NewSandboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
