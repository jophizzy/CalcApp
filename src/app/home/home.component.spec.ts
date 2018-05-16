import { TestBed, fakeAsync, async, tick , ComponentFixture} from '@angular/core/testing';
import { CalcComponent } from '../calc/calc.component';
import { ListComponent } from '../list/list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from '../app-routing.module';
import { MatButtonModule, MatInputModule, MatGridListModule, MatButtonToggleModule,
  MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let location: Location;
  let router: Router;
  let component: any;
  let fixture: ComponentFixture<HomeComponent>;

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
        HomeComponent,
        CalcComponent,
        ListComponent
      ]
    }).compileComponents();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(HomeComponent);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should go to calc page on Calculator App click', async(() => {
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
