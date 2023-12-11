import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupBoardComponent } from './group-board.component';

describe('GroupBoardComponent', () => {
  let component: GroupBoardComponent;
  let fixture: ComponentFixture<GroupBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
