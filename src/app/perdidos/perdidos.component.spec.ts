import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerdidosComponent } from './perdidos.component';

describe('PerdidosComponent', () => {
  let component: PerdidosComponent;
  let fixture: ComponentFixture<PerdidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerdidosComponent]
    });
    fixture = TestBed.createComponent(PerdidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
