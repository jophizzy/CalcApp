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
  public finished: boolean;
  public equalSign: string;
  public text: string;

  displayNum(num: string) {
    if (this.finished === true) {
      this.reset();
      if (this.operator === ('')) {
        if (num === 'percent') {
          this.value1 = Number(this.value1 != null ? this.value1.toString() : '0') / 100;
        } else if (num === 'plusMinus') {
          this.value1 *= -1;
        } else { this.value1 = Number(this.value1 != null ? this.value1.toString() + num : '' + num); }
      }
      if (this.value1 != null && this.operator === ('')) {
        this.displayOperator(this.operator);
      } else if (this.value1 !== null) {
          if (num === 'percent') {
            this.value2 = Number(this.value2 != null ? this.value2.toString() : '0') / 100;
          } else if (num === 'plusMinus') {
            this.value2 *= -1;
          } else { this.value2 = Number(this.value2 != null ? this.value2.toString() + num : '' + num); }
      }
    } else {
        if (this.operator === ('')) {
          if (num === 'percent') {
            this.value1 = Number(this.value1 != null ? this.value1.toString() : '0') / 100;
          } else if (num === 'plusMinus') {
              this.value1 *= -1;
          } else { this.value1 = Number(this.value1 != null ? this.value1.toString() + num : '' + num); }
        }
        if (this.value1 != null && this.operator === ('')) {
          this.displayOperator(this.operator);
        } else if (this.value1 !== null) {
            if (num === 'percent') {
              this.value2 = Number(this.value2 != null ? this.value2.toString() : '0') / 100;
            } else if (num === 'plusMinus') {
              this.value2 *= -1;
            } else {
              this.value2 = Number(this.value2 != null ? this.value2.toString() + num : '' + num);
            }
        }
    }
  }

  displayOperator (operatorName: string) {
    if (operatorName === 'division') {
      this.operator = '/';
    } else if (operatorName === 'multiply') {
      this.operator = '*';
    } else if (operatorName === 'add') {
      this.operator = '+';
    } else if (operatorName === 'subtract') {
      this.operator = '-';
    } else {}
  }

  reset() {
    this.result = null;
    this.mockString = '';
    this.mockString2 = '';
    this.operator = '';
    this.value1 = null;
    this.value2 = null;
    this.equalSign = '';
    this.finished = false;
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
    this.finished = true;
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
    this.finished = false;
  }
}
