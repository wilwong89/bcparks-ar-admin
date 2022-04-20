import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCampingComponent } from './group-camping.component';
import { GroupCampingModule } from './group-camping.module';

describe('GroupCampingComponent', () => {
  let component: GroupCampingComponent;
  let fixture: ComponentFixture<GroupCampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCampingComponent],
      imports: [GroupCampingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
