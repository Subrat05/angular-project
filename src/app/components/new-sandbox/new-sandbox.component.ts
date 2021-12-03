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
    let chips: any = [];
  
    for(let i = 0 ; i < fields.length; i++) {
          formData[fields[i].formControlName] =
          fields[i].isrequired ? 
          new FormControl('', Validators.required)
            : new FormControl('');
         // added logic for tags
        if(fields[i].formControlName === 'tags') {
           fields[i].chips.forEach((chip:any) => {
             chips.push(chip.chipName);
           });
          formData[fields[i].formControlName].value = chips;
        }
      
    }
    console.log("formData:");
    console.log(formData)
    this.sandboxForm = new FormGroup(formData)
  }

  createSandbox() {
     this.commonService.setData("projectName", this.sandboxForm.controls['projectName'].value);
     this.commonService.setData("description", this.sandboxForm.controls['description'].value);
     this.commonService.setData("colorName", this.sandboxForm.controls['colorName'].value);
     this.commonService.setData("tags", this.sandboxForm.controls['tags'].value);
    console.log("Inside CreateSandbox() ------------")
    console.log(this.sandboxForm)
    this.router.navigate(['/createSandbox']);
    }
  back() {
    this.router.navigate(['/sandbox']);
  }
// create this method
  getCombineDropdownValues (data:any) {
       
       let FILTER_VALUES:any = [];
       let singleDropdownObj:any = { 
         label: 'Dropdown',
         formControlName: 'dropdown',
         fieldType: "dropdown" 
        };
       for(let i=0; i < data.length; i++) {
        if (data[i].fieldType === 'dropdown') {
          //console.log(data[i]);
            FILTER_VALUES.push(data[i].FILTER_VALUES);
        }
       }
       // deleting the arrays here only for one dropdown
      data = data.filter((x:any) => x.fieldType !== 'dropdown');
      //console.log(data)
      //console.log(FILTER_VALUES);
      singleDropdownObj.FILTER_VALUES = FILTER_VALUES;
      //console.log(singleDropdownObj);
      data.push(singleDropdownObj);
      return data;
      
    }
  

  ngOnInit(): void {
      // here we are getting the data from mock-json file this.globalDATA
     
     this.newSandboxObject = this.commonService.getMockData().ATTRIBUTES;
    // console.log(this.newSandboxObject);
    
   // used to creater form dynamically
     this.globalDATA = this.commonService.getMockData().DATA;
    //console.log("this.globalDATA");
     // used for header purpose 
     //console.log(this.globalDATA);


     // New changes for API  starts
     /*
     this.commonService.getMockData().subscribe(data => this.newSandboxObject = data.ATTRIBUTES);
     this.commonService.getMockData().subscribe(serverData => this.globalDATA = serverData.DATA);
     */

    this.newSandboxObject.data = this.getCombineDropdownValues(this.newSandboxObject.data);
    this.createDynamicForm(this.newSandboxObject.data);

  }

}
