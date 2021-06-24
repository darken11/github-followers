import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitHubComponent } from './git-hub/git-hub.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

const routes: Routes = [
    {
        path:"home",
        component:HomeComponent
      },
      {
        path:"followers/:id/:username",
        component:ProfileFollowerComponent
      },
      {
        path:"followers",
        component:GitHubComponent
      }, 
      {
        path:"posts",
        component:PostComponent
      },
      {
        path:"**",
        component:PageNotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
