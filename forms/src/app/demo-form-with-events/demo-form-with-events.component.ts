import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html'
})
export class DemoFormWithEventsComponent implements OnInit {

  myForm: FormGroup;
  private sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      sku: ['', Validators.required]
    });

    this.sku = this.myForm.controls.sku;

    this.sku.valueChanges.subscribe(
      (value: string) => {
        console.log('sku changed to: ', value);
      });

    this.myForm.valueChanges.subscribe(
      (value: string) => {
        console.log('form changed to: ', value);
      }
    );
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }
}
