import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperheroesListPage } from './superheroes-list.page';

describe('SuperheroesListPage', () => {
  let component: SuperheroesListPage;
  let fixture: ComponentFixture<SuperheroesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
