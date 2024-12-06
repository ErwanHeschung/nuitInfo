import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetItBackComponent } from './get-it-back.component';

describe('GetItBackComponent', () => {
  let component: GetItBackComponent;
  let fixture: ComponentFixture<GetItBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetItBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetItBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
