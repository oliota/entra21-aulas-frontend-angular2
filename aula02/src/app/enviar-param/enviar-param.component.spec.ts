import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviarParamComponent } from './enviar-param.component';

describe('EnviarParamComponent', () => {
  let component: EnviarParamComponent;
  let fixture: ComponentFixture<EnviarParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviarParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
