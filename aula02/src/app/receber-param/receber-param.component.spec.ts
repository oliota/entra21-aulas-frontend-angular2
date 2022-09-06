import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberParamComponent } from './receber-param.component';

describe('ReceberParamComponent', () => {
  let component: ReceberParamComponent;
  let fixture: ComponentFixture<ReceberParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceberParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
