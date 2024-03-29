import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuceneComponentInputComponent } from './lucene-component-input.component';

describe('LuceneComponentInputComponent', () => {
  let component: LuceneComponentInputComponent;
  let fixture: ComponentFixture<LuceneComponentInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuceneComponentInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuceneComponentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
