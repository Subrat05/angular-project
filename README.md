
1. Created the shared folder, material.module.ts file & shared.module.ts file
1.1 check the file, but not required to write for U, as already there.

2. Created a new component called "new-sandbox" (give any name)
2.2 append to the directory where you want to create by bellow command
2.3 ng g component new-sanbox
2.4 Verify the file is added in app.module.ts file

3. Add the new component in app.routing.ts file 

import { NewSandboxComponent } from './components/new-sandbox/new-sandbox.component';
{path: 'newSandbox', component: NewSandboxComponent}

3.1 Verify if the routing is working or not by hitting the below url in chrome

http://localhost:4200/newSandbox

3.2 I have removed the pop-up files from sand-box.componet file and put in new compoent

check the html, module.ts & CSS files


***************** Changes for CreateSandbox NEw UI**********************

1. First we will create the componnet for new UI. To do that navigate to the folder
where you want to keep the file . (I think ,parallel to side-nav componnet)

2. Run this command: ng g c createSandbox --module shared.module.ts

3.Check the component files generated & added to app.module.ts file. 

In your case it's may be in shared.module.ts file

4. Do the changes for shared.routing.module.ts file

import { CreateSandboxComponent } from  './components/create-sandbox/create-sandbox.component';
{path: 'createSandbox', component: CreateSandboxComponent}

5. Do the changes for createSandbox HTML, CSS & Module.ts file

6. Add the module in app.module.ts file. where other primeNg modules are imported

import { DividerModule } from 'primeng/divider'; 

Add it in imports array.

7. Add this line in new-sandbox.module.ts file in createSandbox() 

this.router.navigate(['/createSandbox']);


8. Save all the files & hit the below url in browser

http://localhost:4200/createSandbox

You can see the new UI now.

*********************************** END  ********************************
 
	