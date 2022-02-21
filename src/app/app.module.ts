import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewUserDetailsComponent } from './new-user-details/new-user-details.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UsersComponent } from './pages/users/users.component';
import { StatsComponent } from './pages/stats/stats.component';
import { DataService } from './data.service';
import { UserlistComponent } from './userlist/userlist.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewUserDetailsComponent,
    ProfilepictureComponent,
    SearchComponent,
    HomeComponent,
    SettingsComponent,
    UsersComponent,
    StatsComponent,
    UserlistComponent,
    SearchbarComponent,
    
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule ,
    CommonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
