import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';

const sharedModules: any[] = [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
];

@NgModule({
    declarations:[],
    imports: sharedModules,
    exports: sharedModules,
    
    
})

export class SharedModule { }