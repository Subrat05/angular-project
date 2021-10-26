export interface INewSandboxObject {
    pageHeader: string,
         inputFields: [
             {
                 formControlName: string,
                 isrequired: boolean,
                 fromContolClass: string,
                 fieldType: string, 
                 inputType: string,
                 placeholder: string,
                 maxlength: number
             }
         ]
}
