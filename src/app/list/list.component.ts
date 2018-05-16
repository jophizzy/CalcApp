import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  operations = [];
  constructor (private _calcService: CalcService) {
    // this.operations = this._calcService.getLog();
  }
  ngOnInit() {
    this.operations = this._calcService.getLog();
  }
}
