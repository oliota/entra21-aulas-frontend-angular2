import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumindoApiComponent } from './consumindo-api.component';

describe('ConsumindoApiComponent', () => {
  let component: ConsumindoApiComponent;
  let fixture: ComponentFixture<ConsumindoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumindoApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumindoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
