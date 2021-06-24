import { GitHubService } from './../gitHub.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'git-hub',
  templateUrl: './git-hub.component.html',
  styleUrls: ['./git-hub.component.css']
})
export class GitHubComponent implements OnInit {
  followers:any[]=[];
constructor(private gitHubService:GitHubService) { }

  ngOnInit(): void {
    this.getUrl();
  }
  getUrl(){
    this.gitHubService.getAll()
    
    .subscribe(followers => this.followers = followers);
      
    
  }
}
