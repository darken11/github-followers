import { AppRoutingModule } from './app-routing.module';
import { PostService } from './post.service';
import {  HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitHubComponent } from './git-hub/git-hub.component';
import { GitHubService } from './gitHub.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    GitHubComponent,
    PageNotFoundComponent,
    HomeComponent,
    PostComponent,
    ProfileFollowerComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [GitHubService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
