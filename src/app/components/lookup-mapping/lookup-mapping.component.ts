import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CommonService } from '../../service/common/common.service';
import {  INewSandboxObject } from  '../../shared/interface/NewSandboxObject';

@Component({
  selector: 'app-lookup-mapping',
  templateUrl: './lookup-mapping.component.html',
  styleUrls: ['./lookup-mapping.component.css']
})
export class LookupMappingComponent implements OnInit {

newSandboxObject:any = [];
sandboxForm : any;
lookupArray: any = [];



  constructor(private router: Router,
   private commonService: CommonService ) { }
  
  
  getLookupMapping(fields: any) {
    //console.log( fields);
    let fieldDetails = fields.ATTRIBUTES.data;
    let lookupDetails  = fields.LOOKUP;
    // console.log(fieldDetails);
    // console.log(lookupDetails);

    for(let i=0; i < lookupDetails.length; i++) {
      //console.log(lookupDetails[i].ATTRIBUTE);
      
      for(let j=0; j < fieldDetails.length; j++ ) {
        //console.log("Inside 2nd loop");
        //console.log(fieldDetails[j].ATTRIBUTE);
        if(lookupDetails[i].ATTRIBUTE == fieldDetails[j].ATTRIBUTE) {
           lookupDetails[i].FORM_DETAILS = fieldDetails[j];
           lookupDetails[i].CHILDREN_VALUES = 
           lookupDetails[i].CHILDREN.map((x:any) =>x.VALUE);
        }
      }
    }
    console.log(lookupDetails);
    return lookupDetails;

   
  }

  createDynamicForm(fields:any) {
      let formData:any= {};
    
  
     for(let i = 0 ; i < fields.length; i++) {
           formData[fields[i].FORM_DETAILS.ATTRIBUTE] =
          fields[i].FORM_DETAILS.ISREQUIRED ? 
           new FormControl('', Validators.required)
             : new FormControl('');
         }
     console.log("formData:");
     console.log(formData);
     this.sandboxForm = new FormGroup(formData);
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


onChangeDropdown(event:any) {
 console.log(event);
}

  ngOnInit(): void {
    
     this.newSandboxObject = this.commonService.getLookupMapping();
     this.lookupArray = this.getLookupMapping(this.newSandboxObject);
     console.log(this.lookupArray);
     this.createDynamicForm(this.lookupArray);

  }

}
