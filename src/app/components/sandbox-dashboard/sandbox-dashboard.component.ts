import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common/common.service';

@Component({
  selector: 'app-sandbox-dashboard',
  templateUrl: './sandbox-dashboard.component.html',
  styleUrls: ['./sandbox-dashboard.component.css']
})
export class SandboxDashboardComponent implements OnInit {
  displaySandbox:any = {};

  constructor(private router: Router, private commonService: CommonService) { }
   
  newSandbox() {
    console.log('Move to New component');
      this.router.navigate(['/newSandbox']);
  }
  ngOnInit(): void {
    this.displaySandbox = this.commonService.getMockData().sandboxDetails;
    console.log(this.displaySandbox);
  }

}
