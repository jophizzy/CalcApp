import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcComponent } from '../calc/calc.component';
import { ListComponent } from '../list/list.component';
import { MatToolbarModule } from '@angular/material';
import { CalcService } from '../calc.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';
import { MatButtonModule, MatInputModule, MatGridListModule, MatButtonToggleModule,
  MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { HomeComponent } from '../home/home.component';

const mockCalcService = jasmine.createSpyObj('CalcService', ['storeLog', 'getLog']);

describe('ListComponent', () => {
  let location: Location;
  let router: Router;
  let component: any;
  let fixture: ComponentFixture<ListComponent>;

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
        RouterTestingModule.withRoutes(routes)],
      declarations: [
        ListComponent,
        CalcComponent,
        HomeComponent
      ],
      providers: [{provide: CalcService, useValue: mockCalcService}]
    })
    .compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(ListComponent);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to calc page on Go back to Calculator click', async(() => {
    const button = fixture.nativeElement.querySelector('button');
    // const button = fixture.debugElement.query(By.css('button')).nativeElement; Same as line 45
    button.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
        expect(location.path()).toBe('/calc');
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
