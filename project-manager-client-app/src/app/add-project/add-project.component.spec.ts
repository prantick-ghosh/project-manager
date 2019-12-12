import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from './add-project.component';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { EventService } from '../services/event.service';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { Ng5SliderModule } from 'ng5-slider';
import { FilterUserPipe } from '../pipes/filter-user.pipe';

describe('ProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: AddProjectComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ AddProjectComponent,FilterUserPipe ],
      providers: [TaskService, EventService,ProjectService,UserService
      ],
      imports: [FormsModule, ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }),
        HttpClientModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes),
        Ng5SliderModule,
        BsDatepickerModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
