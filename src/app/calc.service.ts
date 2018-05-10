import { Injectable } from '@angular/core';

@Injectable()
export class CalcService {
  operation = '';
  constructor() { }
  storeLog(name: string) {
    console.log(name);
    this.operation += name;
    this.operation += '\n';
  }

  getLog(): string {
    return this.operation;
  }
}
