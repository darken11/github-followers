import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isFavorite : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onFavorite(){
    this.isFavorite = !this.isFavorite;
  }
}
