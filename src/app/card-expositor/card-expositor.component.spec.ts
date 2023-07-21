import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpositorComponent } from './card-expositor.component';

describe('CardExpositorComponent', () => {
  let component: CardExpositorComponent;
  let fixture: ComponentFixture<CardExpositorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardExpositorComponent]
    });
    fixture = TestBed.createComponent(CardExpositorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
