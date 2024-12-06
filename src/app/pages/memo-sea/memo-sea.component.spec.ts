import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoSeaComponent } from './memo-sea.component';

describe('MemoSeaComponent', () => {
  let component: MemoSeaComponent;
  let fixture: ComponentFixture<MemoSeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemoSeaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoSeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
