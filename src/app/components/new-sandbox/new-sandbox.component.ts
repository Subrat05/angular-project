import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CommonService } from '../../service/common/common.service';
import {  INewSandboxObject } from  '../../shared/interface/NewSandboxObject';


@Component({
  selector: 'app-new-sandbox',
  templateUrl: './new-sandbox.component.html',
  styleUrls: ['./new-sandbox.component.css']
})
export class NewSandboxComponent implements OnInit {
  header: string = "";
  enteredTagsName: string[] = ['Loan', 'Full Suite'];
  disclaimerText: string = "";
  projectId : string = "";
  ownerName: string = "";
  chipBtn1: string = "";
  chipBtn2: string = "";
  // here we created an Interfeace of the response 
  //that we are getting from mock-json file
  
  newSandboxObject:INewSandboxObject[]= [];

  constructor(private router: Router, private formBuilder: FormBuilder,
   private commonService: CommonService ) { }
  
  sandboxForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      description: ['', Validators.required],
      colorName: ['', Validators.required],
      tags: [''],
      prjectLocation: ['']

  });

  createSandbox() {
    this.commonService.setData("projectName", this.sandboxForm.controls['projectName'].value);
    this.commonService.setData("description", this.sandboxForm.controls['description'].value);
    this.commonService.setData("colorName", this.sandboxForm.controls['colorName'].value);
    this.router.navigate(['/createSandbox']);
    }
  back() {
    this.router.navigate(['/sandbox']);
  }

  ngOnInit(): void {
      
      // Here we are getting the data from MockData Service
     this.header = this.commonService.getMockData().newSandboxHeader;
     this.disclaimerText = this.commonService.getMockData().disclaimerText;
     this.projectId = this.commonService.getMockData().projectId;
     this.ownerName = this.commonService.getMockData().ownerName;
     this.chipBtn1 = this.commonService.getMockData().chipBtn1;
     this.chipBtn2 = this.commonService.getMockData().chipBtn2;

     // here we are getting the data from mock-json file

     this.newSandboxObject = this.commonService.getMockData().newSandBoxPageDetails;
     console.log(this.newSandboxObject);
  }

}
