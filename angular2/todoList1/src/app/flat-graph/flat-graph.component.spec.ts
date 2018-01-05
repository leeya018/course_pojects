import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatGraphComponent } from './flat-graph.component';

describe('FlatGraphComponent', () => {
  let component: FlatGraphComponent;
  let fixture: ComponentFixture<FlatGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
