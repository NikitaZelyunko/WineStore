import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineListComponent } from './vine-list.component';

describe('VineListComponent', () => {
  let component: VineListComponent;
  let fixture: ComponentFixture<VineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
