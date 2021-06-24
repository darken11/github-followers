import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { DataService } from './data.service';

@Injectable()
export class GitHubService extends DataService{
    constructor(httpClient: HttpClient){
        super('https://api.github.com/users/darken11/followers',httpClient)
    }
}