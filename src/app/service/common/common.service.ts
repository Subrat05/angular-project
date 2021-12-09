/* Created a service as Common Service to share the data
 between NewSandboxComponent to CeateSandboxComponent
 Pls check the codes if you can add it to existin service.
 */
import { Injectable } from '@angular/core';
// check, it may be alreay declared.
import { HttpClient } from '@angular/common/http';

//const mockData: any = require('../../assets/mock-data.json');
//import * as mockData from './mock-data.json';

  // you don't need to write this code, you can just change the url,
    // in your subscribe method.
    
import * as newMockData from './new-format-mock-data.json';
// importing the create-new-data.json file

import * as createNewData from './create-new-data.json';

// dynamicFilter json

import * as dynamicFilter from './dynamicFilter-data.json';

//lookup-mapping json 

import * as lookupMapping from './lookup-mapping-data.json';




@Injectable()
export class CommonService {
    // created a object to hold the data
    private sandboxData:any = {};
    //private dummyData = (mockData as any).default;
    private newDummyData = (newMockData as any).default;
    private isAPICall = true;

    private createNewData = (createNewData as any).default;

    private dynamicFilter = (dynamicFilter as any).default;

    private lookupMapping = (lookupMapping as any).default;

    constructor(private http: HttpClient) {}
    
    setData(option: any, value: any): void {
        this.sandboxData[option] = value;
    }

    getData() {
        return this.sandboxData;
    }
      // you don't need to write this code, you can just change the url,
    // in your subscribe method.

// Old changes
getMockData() { 
    return this.newDummyData;
}

//New changes for client machine based on tagging

    getMockData1() {
        
        if(this.isAPICall) {
            return this.http.get('/new-format-mock-data.json');
        } else {
            //return this.dummyData;
            return this.newDummyData;
        }
        
    // end     
    } 
  // ****** Create a new method to get the Form details from "Create-new-data.json" file

  getCreateNewData() {
    return this.createNewData;
  }

  getDynamicFilter() {
      return this.dynamicFilter;
  }

  getLookupMapping() {
      return this.lookupMapping;
  }

}