/**
 * Import all of the Angular Material components that you will use in your application.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from '@angular/material/input';



@NgModule({
    declarations:[],
    imports:[
        MatDialogModule,
        MatInputModule
        
        
    ],
    exports: [
        MatDialogModule,
        MatInputModule
        
        
    ]
})

export class MaterialModule { }