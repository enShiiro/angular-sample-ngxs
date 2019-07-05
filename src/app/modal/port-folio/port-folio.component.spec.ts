import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortFolioComponent } from './port-folio.component';

describe('PortFolioComponent', () => {
  let component: PortFolioComponent;
  let fixture: ComponentFixture<PortFolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortFolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
