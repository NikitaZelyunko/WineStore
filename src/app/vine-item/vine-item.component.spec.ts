import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VineItemComponent } from './vine-item.component';

describe('VineItemComponent', () => {
  let component: VineItemComponent;
  let fixture: ComponentFixture<VineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
