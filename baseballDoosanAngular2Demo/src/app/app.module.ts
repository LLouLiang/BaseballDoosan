import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgClass } from '@angular/common';

import { Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

import { UserOpsService } from './services/user-ops.service';
import { ValidationService } from './services/validation.service';

const routes = [
  {path: '', component:HomeComponent},
  {path: 'contact', component:ContactComponent}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserOpsService,ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
