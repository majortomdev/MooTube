import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosBoardComponent } from './videos-board.component';

describe('VideosBoardComponent', () => {
  let component: VideosBoardComponent;
  let fixture: ComponentFixture<VideosBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
