import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c-select',
  templateUrl: './c-select.component.html',
  styleUrls: ['./c-select.component.css']
})
export class CSelectComponent implements OnInit {
  @Input() values;
  constructor() { }

  ngOnInit() {
    console.log(this.values.value)
  }

}
