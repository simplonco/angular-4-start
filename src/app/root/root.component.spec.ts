import { TestBed, async } from '@angular/core/testing';
import { RootComponent } from './root.component';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';

describe('RootComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RootComponent,
        HeaderComponent,
        BodyComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(RootComponent);
    const root = fixture.debugElement.componentInstance;
    expect(root).toBeTruthy();
  }));

});