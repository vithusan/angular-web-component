import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsNgrxComponent } from './news-ngrx.component';

describe('NewsNgrxComponent', () => {
  let component: NewsNgrxComponent;
  let fixture: ComponentFixture<NewsNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
