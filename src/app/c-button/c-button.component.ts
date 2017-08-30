import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-button',
  templateUrl: './c-button.component.html',
  styleUrls: ['./c-button.component.css']
})
export class CButtonComponent implements OnInit {
  @Input() type = 'submit';
  @Input() value;
  constructor() { }

  ngOnInit() {
  }

}
