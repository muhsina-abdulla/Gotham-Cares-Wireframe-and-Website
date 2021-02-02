import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  name  = 'Muhsina Binth Abdulla';
  constructor() { }

  ngOnInit(): void {
  }

  onKeyup(newname: string): void {
      this.name = newname;
  }
}
