import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoParametroComponent } from './destino-parametro.component';

describe('DestinoParametroComponent', () => {
  let component: DestinoParametroComponent;
  let fixture: ComponentFixture<DestinoParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoParametroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinoParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
