import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingConParametrosComponent } from './routing-con-parametros.component';

describe('RoutingConParametrosComponent', () => {
  let component: RoutingConParametrosComponent;
  let fixture: ComponentFixture<RoutingConParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingConParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingConParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
