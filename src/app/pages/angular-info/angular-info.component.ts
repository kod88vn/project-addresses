import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-info',
  templateUrl: './angular-info.component.html',
  styleUrls: ['./angular-info.component.styl']
})
export class AngularInfoComponent implements OnInit {
  title = 'Angular Info';
  constructor() { }

  ngOnInit() {
  }

}
