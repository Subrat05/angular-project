/**
 * Import all of the Angular Material components that you will use in your application.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
    declarations:[],
    imports:[
        MatDialogModule
    ],
    exports: [
        MatDialogModule
    ]
})

export class MaterialModule { }