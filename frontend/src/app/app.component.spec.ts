import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        DashboardModule,
        HttpClientModule,
        MatToolbarModule,
        RouterTestingModule.withRoutes([])
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
