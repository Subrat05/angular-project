import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SandboxDashboardComponent } from './components/sandbox-dashboard/sandbox-dashboard.component';
import { NewSandboxComponent } from './components/new-sandbox/new-sandbox.component';
import { CreateSandboxComponent } from  './components/create-sandbox/create-sandbox.component';
import { DynamicFilterComponent } from './components/dynamic-filter/dynamic-filter.component';
import { LookupMappingComponent } from './components/lookup-mapping/lookup-mapping.component';

const routes: Routes = [
  {path: '', redirectTo: '/sandbox', pathMatch: 'full'},
  {path: 'sandbox', component: SandboxDashboardComponent},
  {path: 'newSandbox', component: NewSandboxComponent},
  {path: 'createSandbox', component: CreateSandboxComponent},
  {path: 'dynamicFilter', component: DynamicFilterComponent},
  {path: 'lookupMapping', component: LookupMappingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
