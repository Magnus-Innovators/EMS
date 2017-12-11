import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeModule } from './home/home.module';
import { LinkService } from './shared-services/link.service';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent, loadChildren: './home/home.module#HomeModule'},
      {path: 'login', component: LoginComponent},
      {path: 'main', component: MainComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
    HomeModule
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
