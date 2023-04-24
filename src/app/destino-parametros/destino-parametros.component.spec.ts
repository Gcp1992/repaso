import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinoParametrosComponent } from './destino-parametros.component';

describe('DestinoParametrosComponent', () => {
  let component: DestinoParametrosComponent;
  let fixture: ComponentFixture<DestinoParametrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinoParametrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinoParametrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
