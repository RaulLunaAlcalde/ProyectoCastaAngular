import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariIniciSessioComponent } from './formulari-inici-sessio.component';

describe('FormulariIniciSessioComponent', () => {
  let component: FormulariIniciSessioComponent;
  let fixture: ComponentFixture<FormulariIniciSessioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariIniciSessioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulariIniciSessioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
