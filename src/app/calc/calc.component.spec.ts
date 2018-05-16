import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';
import { AppModule } from '../app.module';
import { MatButtonModule, MatInputModule, MatGridListModule, MatButtonToggleModule,
         MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { CalcService } from '../calc.service';
import { By } from '@angular/platform-browser';

const mockCalcService = jasmine.createSpyObj('CalcService', ['storeLog', 'getLog']);

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatButtonModule,
        MatInputModule,
        MatGridListModule,
        MatButtonToggleModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule
      ],
      declarations: [ CalcComponent ],
      providers: [{provide: CalcService, useValue: mockCalcService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('AC Button should clear all operations', () => {
    // const button = fixture.nativeElement.querySelector('.acButton');
    // const button = fixture.debugElement.query(By.css('.acButton')).nativeElement;
    const button = fixture.nativeElement.querySelector('.acButton');
    button.click();
    console.log(button);
    fixture.detectChanges();
    expect(component.result).toEqual(null);
  });
});
