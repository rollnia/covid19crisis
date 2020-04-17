import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  currentUserInfo:any;
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("currentUser") !== null) {
      let user = localStorage.getItem('currentUser');
      this.currentUserInfo = JSON.parse(user);
    }else{
      this.currentUserInfo=null;
    }
    

  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
}
