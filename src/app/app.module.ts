import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SandboxDashboardComponent } from './components/sandbox-dashboard/sandbox-dashboard.component';
import { NewSandboxComponent } from './components/new-sandbox/new-sandbox.component';
import { SharedModule } from './shared/shared.module';



import {CardModule} from 'primeng/card';   
import {InputTextModule} from 'primeng/inputtext';
import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
// Changes for New Sandbox , added these 2 modules
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RadioButtonModule} from 'primeng/radiobutton';
import { ChipModule } from 'primeng/chip';






 
@NgModule({
declarations: [
    AppComponent,
    HeaderComponent,
    SandboxDashboardComponent,
    NewSandboxComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    DataViewModule,
    CardModule,
    InputTextModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    RatingModule,
    RippleModule,
    InputTextareaModule,
    RadioButtonModule,
    SharedModule,
    ChipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
