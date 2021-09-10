import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sandbox-dashboard',
  templateUrl: './sandbox-dashboard.component.html',
  styleUrls: ['./sandbox-dashboard.component.css']
})
export class SandboxDashboardComponent implements OnInit {

  constructor(private router: Router) { }
  newSandbox() {
    console.log('Move to New component');
      this.router.navigate(['/newSandbox']);
  }
  ngOnInit(): void {
  }

}
