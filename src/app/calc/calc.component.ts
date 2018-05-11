import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public result: number;
  public mockString: string;
  public mockString2: string;
  public value1: number;
  public value2: number;
  public operator: string;
  public finished: string;
  public equalSign: string;
  public text: string;

  displayNum(num: string) {
    if (this.finished.match('done')) {
      this.ngOnInit();
      if (this.operator === ('')) {
        this.value1 = Number(this.value1 != null ? this.value1.toString() : '' + num);
      }
      if (this.value1 != null && this.operator === ('')) {
        this.displayOperator(this.operator);
      } else if (this.value1 !== null) {
        this.value2 = Number(this.value2 != null ? this.value2.toString() : '' + num);
      }
    } else {
      if (this.operator === ('')) {
        this.value1 = Number(this.value1 != null ? this.value1.toString() : '' + num);
        console.log(this.value1);
      }
      if (this.operator === ('')) {
        this.displayOperator(this.operator);
      } else if (this.value1 !== null) {
        this.value2 = Number(this.value2 != null ? this.value2.toString() : '' + num);
      }
    }
  }
  displayOperator (operatorName: string) {
    if (operatorName.match('division')) {
      this.operator = '/';
    } else if (operatorName.match('multiply')) {
      this.operator = '*';
    } else if (operatorName.match('add')) {
      this.operator = '+';
    } else if (operatorName.match('subtract')) {
      this.operator = '-';
    } else {}
  }

  resultFinal() {
    if (this.operator === ('/')) {
      this.equalSign = '=';
      this.result = this.value1 / this.value2;
    } else if (this.operator === ('*')) {
      this.equalSign = '=';
      this.result = this.value1 * this.value2;
    } else if (this.operator === ('+')) {
      this.equalSign = '=';
      this.result = this.value1 + this.value2;
    } else if (this.operator === ('-')) {
      this.equalSign = '=';
      this.result = this.value1 - this.value2;
    } else {}
    this._calcService.storeLog(String(this.value1) + this.operator + String(this.value2) + this.equalSign + this.result);
    this.finished = 'done';
  }
  constructor (private _calcService: CalcService) {}
  ngOnInit() {
    this.result = null;
    this.mockString = '';
    this.mockString2 = '';
    this.operator = '';
    this.value1 = null;
    this.value2 = null;
    this.equalSign = '';
    this.finished = '';
  }
}
