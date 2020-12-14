import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './components/activity-list/activity-list.component';
import { ActivityDetailComponent } from './components/activity-detail/activity-detail.component';
import { ActivitiesAdminListComponent } from './components/activities-admin-list/activities-admin-list.component';
import { ActivityAdminDetailComponent } from './components/activity-admin-detail/activity-admin-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select'; 

@NgModule({
  declarations: [
    ActivityListComponent,
    ActivityDetailComponent,
    ActivitiesAdminListComponent,
    ActivityAdminDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSelectModule
  ]
})
export class ActivitiesModule { }
