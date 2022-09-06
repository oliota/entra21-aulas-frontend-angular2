import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirApiComponent } from './consumir-api.component';

describe('ConsumirApiComponent', () => {
  let component: ConsumirApiComponent;
  let fixture: ComponentFixture<ConsumirApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumirApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumirApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
