import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingParametroComponent } from './routing-parametro.component';

describe('RoutingParametroComponent', () => {
  let component: RoutingParametroComponent;
  let fixture: ComponentFixture<RoutingParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
