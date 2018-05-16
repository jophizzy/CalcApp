import { TestBed, fakeAsync, async, tick , ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { routes } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { ListComponent } from './list/list.component';
import { MatButtonModule, MatInputModule, MatGridListModule, MatButtonToggleModule,
  MatToolbarModule, MatCardModule, MatFormFieldModule, MatIconModule } from '@angular/material';

describe('AppComponent', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let component: any;

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
        AppComponent,
        HomeComponent,
        CalcComponent,
        ListComponent
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should go to home page on Home click', fakeAsync(() => {
    const button = fixture.nativeElement.querySelector('button');
    // const button = fixture.debugElement.query(By.css('button')).nativeElement; Same as line above
    button.click();
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/home');
  }));

  it('navigate to "" redirects you to the AppComponent', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/');
  }));

  it('navigate to "home" takes you to /home', fakeAsync(() => {
    router.navigate(['home']);
    tick();
    expect(location.path()).toBe('/home');
  }));

  // it('navigate to "" redirects you to /home', fakeAsync(() => {
  //   router.navigate(['']).then(() => {
  //     expect(location.path()).toBe('/home');
  //   });
  // }));

});
