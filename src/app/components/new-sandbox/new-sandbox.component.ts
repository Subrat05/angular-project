import { Component, OnInit } from '@angular/core';

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

  
  constructor() { }
  

  createSandbox() {
    console.log('createSandbox() method clicked!')
  }

  back() {
    console.log('back button');
  }

  ngOnInit(): void {
  }

}
