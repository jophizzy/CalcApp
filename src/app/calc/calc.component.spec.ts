import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';
import { ListComponent } from '../list/list.component';
import { HomeComponent } from '../home/home.component';
import { AppModule } from '../app.module';
import { MatButtonModule, MatInputModule, MatGridListModule, MatButtonToggleModule,
         MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { CalcService } from '../calc.service';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';

const mockCalcService = jasmine.createSpyObj('CalcService', ['storeLog', 'getLog']);

describe('CalcComponent', () => {
  let component: any;
  let fixture: ComponentFixture<CalcComponent>;
  let router: Router;
  let location: Location;
  let button: any;

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
        MatIconModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        CalcComponent,
        ListComponent,
        HomeComponent
      ],
      providers: [{provide: CalcService, useValue: mockCalcService}]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(CalcComponent);
    router.initialNavigation();
    // spyOn(component, 'displayNum');
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to list page on View List of Operations click', fakeAsync(() => {
    button = fixture.nativeElement.querySelector('.linkList');
    // const button = fixture.debugElement.query(By.css('button')).nativeElement; Same as line above
    button.click();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/list');
  }));

  it('should set value to 1 when Button1 is clicked', () => {
    button = fixture.nativeElement.querySelector('.button1');
    // button = fixture.debugElement.query(By.css('.button1')).nativeElement;
    button.click();
    // console.log(button);
    // expect(component.displayNum).toHaveBeenCalledTimes(1);
  });

  it('AC Button should clear all operations', () => {
    // const button = fixture.nativeElement.querySelector('.acButton');
    // const button = fixture.debugElement.query(By.css('.acButton')).nativeElement;
    button = fixture.nativeElement.querySelector('.acButton');
    button.click();
    console.log(button);
    // fixture.detectChanges();
    // expect(component.result).toEqual(null);
  });
});
