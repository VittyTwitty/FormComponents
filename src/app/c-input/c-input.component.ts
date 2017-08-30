import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-c-input',
  templateUrl: './c-input.component.html',
  styleUrls: ['./c-input.component.css']
})
export class CInputComponent implements OnInit {
  @Input() control;
  @Input() placeholder = '';
  @Input() value = '';
  @Input() type: string = 'text';
  constructor() { }

  ngOnInit() {
    console.log(this.placeholder)
  }

}
