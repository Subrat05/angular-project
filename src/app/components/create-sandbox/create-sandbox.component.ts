import { Component, OnInit  } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-create-sandbox',
  templateUrl: './create-sandbox.component.html',
  styleUrls: ['./create-sandbox.component.css']
})
export class CreateSandboxComponent implements OnInit {
  
 
  
  constructor( private router: Router) { }

  cancelToNewSandbox() {
    this.router.navigate(['/newSandbox']);
  }

  ngOnInit(): void {
  }

}
