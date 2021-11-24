import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';
import { CommonService } from '../../service/common/common.service';

@Component({
  selector: 'app-create-sandbox',
  templateUrl: './create-sandbox.component.html',
  styleUrls: ['./create-sandbox.component.css']
})
export class CreateSandboxComponent implements OnInit {
  
  newSandboxData: any = {};
  projectName: string = "";
  description: string = "";
  colorName: string = "";
  projectId: string = "";
  ownerName: string = "";
  tags: string[] = [];
  


  constructor( private router: Router, private commonService: CommonService) { }
  

  cancelToNewSandbox() {
    this.router.navigate(['/newSandbox']);
  }

  ngOnInit(): void {
    // here we are getting the data of NewSandBox.
    this.newSandboxData = this.commonService.getData();
    this.projectName = this.newSandboxData.projectName;
    this.description = this.newSandboxData.description;
    this.colorName = this.newSandboxData.colorName;
    this.tags = this.newSandboxData.tags;
    

    // here calling the mockData service for mockdata
    this.projectId = this.commonService.getMockData().DATA[0].projectId;
    this.ownerName = this.commonService.getMockData().DATA[0].ownerName;

  }


}
