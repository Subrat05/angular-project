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
  
  newSandboxObject:any = [];
  sandboxForm : any;
  globalDATA: any = [];
 

  constructor(private router: Router,
   private commonService: CommonService ) { }
  
  
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
      

     // here we are getting the data from mock-json file this.globalDATA

     this.newSandboxObject = this.commonService.getMockData().ATTRIBUTES;
     console.log(this.newSandboxObject);
     
     // used to creater form dynamically
     this.globalDATA = this.commonService.getMockData().DATA;
     console.log("this.globalDATA");
     // used for header purpose 
     console.log(this.globalDATA);
     
     
     this.createDynamicForm(this.newSandboxObject.data);

  }

}
