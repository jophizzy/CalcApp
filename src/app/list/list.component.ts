import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  operations: string;
  constructor (private _calcService: CalcService) {
    this.operations = this._calcService.getLog();
  }
  ngOnInit() {
  }
}