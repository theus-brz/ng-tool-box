import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenMgrComponent } from './token-mgr.component';

describe('TokenMgrComponent', () => {
  let component: TokenMgrComponent;
  let fixture: ComponentFixture<TokenMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenMgrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
