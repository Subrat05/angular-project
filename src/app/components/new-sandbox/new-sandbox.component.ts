import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
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
  newSandboxObject:any = [];
  sandboxForm : any;
 

  constructor(private router: Router,
   private commonService: CommonService ) { }
  


  // sandboxForm = this.formBuilder.group({
  //     projectName: ['', Validators.required],
  //     description: ['', Validators.required],
  //     colorName: ['', Validators.required],
  //     tags: [''],
  //     projectLocation: ['']

  // });
  
  createDynamicForm(fields: any) {
    console.log( fields);
    let formData:any= {};

    for(let i = 0 ; i < fields.length; i++) {
      console.log(fields[i].formControlName)
      console.log(fields[i].isrequired);
        formData[fields[i].formControlName] =
        fields[i].isrequired ? 
        new FormControl('', Validators.required)
        : new FormControl('');
    }
    console.log("formData:");
    console.log(formData)
    this.sandboxForm = new FormGroup(formData)
  }

  createSandbox() {
    // this.commonService.setData("projectName", this.sandboxForm.controls['projectName'].value);
    // this.commonService.setData("description", this.sandboxForm.controls['description'].value);
    // this.commonService.setData("colorName", this.sandboxForm.controls['colorName'].value);
    console.log("Inside CreateSandbox() ------------")
    console.log(this.sandboxForm)
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
     
     this.createDynamicForm(this.newSandboxObject.inputFields);

  }

}
