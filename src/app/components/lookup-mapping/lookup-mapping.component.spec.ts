import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupMappingComponent } from './lookup-mapping.component';

describe('LookupMappingComponent', () => {
  let component: LookupMappingComponent;
  let fixture: ComponentFixture<LookupMappingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupMappingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
