import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RvlocationListComponent } from './rvlocation-list.component';

describe('RvlocationListComponent', () => {
  let component: RvlocationListComponent;
  let fixture: ComponentFixture<RvlocationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RvlocationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RvlocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
