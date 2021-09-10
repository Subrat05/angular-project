
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



 
	