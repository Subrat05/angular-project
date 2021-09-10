import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSandboxComponent } from './new-sandbox.component';

describe('NewSandboxComponent', () => {
  let component: NewSandboxComponent;
  let fixture: ComponentFixture<NewSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
