import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-form-ng-model',
  templateUrl: './demo-form-ng-model.component.html'
})
export class DemoFormNgModelComponent implements OnInit {
  productName: string;

  constructor() {
    this.productName = 'Blue Widget';
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}
