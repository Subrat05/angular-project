import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'

// import {COMMA, ENTER} from '@angular/cdk/keycodes';
// import { MatChipInputEvent } from '@angular/material/chips'
// export interface Fruit {
//   name: string;
// }

@Component({
  selector: 'app-new-sandbox',
  templateUrl: './new-sandbox.component.html',
  styleUrls: ['./new-sandbox.component.css']
})
export class NewSandboxComponent implements OnInit {
  header: string = 'New Sandbox';
  projectName: string = "";
  description: string = "";
  selectedColor: string = "";
  tagName: string = "";
  disclaimerText: string = "Your new sandbox will automatically be created in the DEV envionment using computing resources that automatically scale to meet the needs of your project.";

  constructor(private router: Router) { 
  }
  
  sandboxForm = new FormGroup({
    projectName: new FormControl(),
    description:new FormControl(),
    colorName: new FormControl(),
    tags: new FormControl()
  });

  createSandbox() {
    console.log('createSandbox() method clicked!');
    console.log(this.sandboxForm.value);
    this.router.navigate(['/createSandbox']);
    
  }

  back() {
    console.log('back button');
    this.router.navigate(['/sandbox']);
  }

  ngOnInit(): void {
  }

  /*Changes for tag*/

  //   add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.fruits.push({name: value});
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(fruit: Fruit): void {
  //   const index = this.fruits.indexOf(fruit);

  //   if (index >= 0) {
  //     this.fruits.splice(index, 1);
  //   }
  // }

}
