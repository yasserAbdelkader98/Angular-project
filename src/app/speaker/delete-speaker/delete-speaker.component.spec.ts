import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSpeakerComponent } from './delete-speaker.component';

describe('DeleteSpeakerComponent', () => {
  let component: DeleteSpeakerComponent;
  let fixture: ComponentFixture<DeleteSpeakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSpeakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
