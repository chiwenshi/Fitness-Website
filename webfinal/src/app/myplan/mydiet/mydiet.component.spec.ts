import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MydietComponent } from './mydiet.component';

describe('MydietComponent', () => {
  let component: MydietComponent;
  let fixture: ComponentFixture<MydietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MydietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
