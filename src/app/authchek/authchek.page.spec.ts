import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthchekPage } from './authchek.page';

describe('AuthchekPage', () => {
  let component: AuthchekPage;
  let fixture: ComponentFixture<AuthchekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthchekPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthchekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
