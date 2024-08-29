import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleArticleComponent } from './nouvelle-article.component';

describe('NouvelleArticleComponent', () => {
  let component: NouvelleArticleComponent;
  let fixture: ComponentFixture<NouvelleArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
