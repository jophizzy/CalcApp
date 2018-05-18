import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {
  operation = [];
  constructor() { }
  storeLog(name: string) {
    this.operation.push(name);
  }
  getLog() {
    return this.operation;
  }
}
