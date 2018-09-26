import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-header',
  template: `
    <div class="header">Header</div>
  `,
  styles: [`
    .header{
        background-color: rgb(57, 59, 82);
        color: white;
        padding: 20px 30px;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
