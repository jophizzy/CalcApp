import { TestBed, inject } from '@angular/core/testing';

import { CalcService } from './calc.service';

// let mockService: CalcService;

describe('CalcService', () => {
  let mockService: CalcService;
  beforeEach(() => {
    mockService = new CalcService;
    // spyOn(mockService, 'getLog').and.returnValue(['1', '2']);
    mockService.operation = ['1', '2', '3'];
    mockService.getLog();
  });

  it('should be created', () => {
    expect(mockService).toBeTruthy();
  });

  it('getLog should return an array of strings', () => {
    expect(mockService.getLog()).toEqual(mockService.operation);
  });

  it('storeLog should add strings to an array', () => {
    mockService.storeLog('4');
    expect(mockService.getLog()).toEqual(mockService.operation);
  });

  // it('getLog should be called', () => {
  //   expect(mockService.getLog).toHaveBeenCalled(); // To use toHaveBeenCalled, it requires a spy
  // });
});
