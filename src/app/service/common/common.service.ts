/* Created a service as Common Service to share the data
 between NewSandboxComponent to CeateSandboxComponent
 Pls check the codes if you can add it to existin service.
 */
import { Injectable } from '@angular/core';
//const mockData: any = require('../../assets/mock-data.json');
//import * as mockData from './mock-data.json';

  // you don't need to write this code, you can just change the url,
    // in your subscribe method.
    
import * as newMockData from './new-format-mock-data.json';

@Injectable()
export class CommonService {
    // created a object to hold the data
    private sandboxData:any = {};
    //private dummyData = (mockData as any).default;
    private newDummyData = (newMockData as any).default;
    
    setData(option: any, value: any): void {
        this.sandboxData[option] = value;
    }

    getData() {
        return this.sandboxData;
    }
      // you don't need to write this code, you can just change the url,
    // in your subscribe method.

    getMockData() {
        
        //return this.dummyData;
        return this.newDummyData;
        
    } 
  

}