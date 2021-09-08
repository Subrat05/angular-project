import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox-dashboard',
  templateUrl: './sandbox-dashboard.component.html',
  styleUrls: ['./sandbox-dashboard.component.css']
})
export class SandboxDashboardComponent implements OnInit {
  // Changes for New Sandbox starts
  displayModal: boolean = false;
  header: string = 'New Sandbox';
  projectName: string = "";
  description: string = "";
  selectedColor: string = "";
  tagName: string = "";
  disclaimerText: string = "Your new sandbox will automatically be created in the DEV envionment using computing resources that automatically scale to meet the needs of your project.";

  
  constructor() { }
  showModalDialog() {
    this.displayModal = true;
  }

  createSandbox() {
    console.log('createSandbox() method clicked!')
  }

  // Changes for New Sandbox ends here
  
  ngOnInit(): void {
  }

}
