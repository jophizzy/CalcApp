import { Component, OnInit } from '@angular/core';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public result: number;
  public textValue: string;
  public textValue2: string;
  public value1: number;
  public value2: number;
  public operator: string;
  public finished: string;

  clearResult() {
    this.result = null;
    this.textValue = '';
    this.textValue2 = '';
    this.operator = '';
    this.ngOnInit();
  }

  displayNum(num: string) {
    this.textValue += num;
    this.value1 = Number(this.textValue);
  }

  displayPlus() {
    this.value1 = Number(this.textValue);
    this.value1 = -1 * this.value1;
    this.textValue = String(this.value1);
  }

  displayPercent() {
    this.value1 = Number(this.textValue);
    this.textValue += '% = ';
    this.value1 = this.value1 / 100;
    this.textValue += String(this.value1);
    this._calcService.storeLog(this.textValue);
  }
  resultMultiplication(op) {
    this.value1 = Number(this.textValue);
    this.value2 = this.value1;
    this.textValue2 += this.textValue;
    this.textValue = '';
    this.operator = op;
    this.textValue2 += ' * ';
  }

  resultDivision(op) {
    this.value1 = Number(this.textValue);
    this.value2 = this.value1;
    this.textValue2 += this.textValue;
    this.textValue = '';
    this.operator = op;
    this.textValue2 += ' / ';
  }

  resultAdd(op) {
    this.value1 = Number(this.textValue);
    this.value2 = this.value1;
    this.textValue2 += this.textValue;
    this.textValue = '';
    this.operator = op;
    this.textValue2 += ' + ';
  }

  resultSubtract(op) {
    this.value1 = Number(this.textValue);
    this.value2 = this.value1;
    this.textValue2 += this.textValue;
    this.textValue = '';
    this.operator = op;
    this.textValue2 += ' - ';
  }

  resultFinal() {
    this.textValue = String(this.value1);
    this.finished = 'done';
    if (this.operator.match('multiply')) {
      this.textValue2 += this.value1;
      this.result = this.value2 * this.value1;
      this.textValue2 += ' = ';
      this.textValue = String(this.result);
      this._calcService.storeLog(this.textValue2 + this.textValue);
    } else if (this.operator.match('add')) {
      this.textValue2 += this.value1;
      this.result = this.value2 + this.value1;
      this.textValue2 += ' = ';
      this.textValue = String(this.result);
      this._calcService.storeLog(this.textValue2 + this.textValue);
    } else if (this.operator.match('subtract')) {
      this.textValue2 += this.value1;
      this.result = this.value2 - this.value1;
      this.textValue2 += ' = ';
      this.textValue = String(this.result);
      this._calcService.storeLog(this.textValue2 + this.textValue);
    } else if (this.operator.match('division')) {
      this.textValue2 += this.value1;
      this.result = this.value2 / this.value1;
      this.textValue2 += ' = ';
      this.textValue = String(this.result);
      this._calcService.storeLog(this.textValue2 + this.textValue);
    } else {
      console.log('Odd');
    }
  }
  constructor (private _calcService: CalcService) {

  }

  ngOnInit() {
    this.textValue = '';
    this.textValue2 = '';
  }
}
