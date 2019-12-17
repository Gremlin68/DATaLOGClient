import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RvlocationListComponent } from './rvlocation-list/rvlocation-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: RvlocationListComponent }
    ])
  ],

  declarations: [
    RvlocationListComponent
  ]
})
export class RvLocationModule { }