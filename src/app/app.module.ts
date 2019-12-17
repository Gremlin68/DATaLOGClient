import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';

import { EnvironmentUrlService } from './shared/services/environment-url.service';
import { RepositoryService } from './shared/services/repository.service';
//import { RvlocationListComponent } from './rvlocation/rvlocation-list/rvlocation-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    NotFoundComponent//,
    //RvlocationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'owner', loadChildren: "./owner/owner.module#OwnerModule" },
      { path: 'rvlocation', loadChildren: "./rvlocation/rvlocation.module#RvLocationModule" },
      { path: '404', component : NotFoundComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/404', pathMatch: 'full'}
    ])
  ],

  providers: [    
    EnvironmentUrlService,
    RepositoryService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
