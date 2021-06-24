import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-profile-follower',
  templateUrl: './profile-follower.component.html',
  styleUrls: ['./profile-follower.component.css']
})
export class ProfileFollowerComponent implements OnInit {
id:number;
username:string;
page:number;
  constructor(private routes:ActivatedRoute) { }

  ngOnInit(): void {
    //pour recuperer les informations qui sont passer dans l'url on utilise
    //l'objet paramMap qui retourn un observable 
    /* this.routes.paramMap.subscribe(data=>{
      this.id=+data.get('id');
      this.username=data.get('username');

    }) */
//pour recuperer les informations qui sont passer dans l'url(queries) on utilise
    //l'objet queryParamMap qui retourn un observable 
   /*  this.routes.queryParamMap.subscribe(data=>{
      console.log(data.get('page'))
    }) */

    //on peut recuperer aussi les meme informtion avec l'objet snapshot 
    this.id      =+this.routes.snapshot.paramMap.get('id');
    this.username=this.routes.snapshot.paramMap.get('username');

    //on peut recuperer aussi les meme informtion au niveau (queries) avec l'objet snapshot 
    this.page    =+this.routes.snapshot.queryParamMap.get('page');
  }
  

}
