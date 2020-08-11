import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDetailsUploadComponent } from './video-details-upload.component';

describe('VideoDetailsUploadComponent', () => {
  let component: VideoDetailsUploadComponent;
  let fixture: ComponentFixture<VideoDetailsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDetailsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
