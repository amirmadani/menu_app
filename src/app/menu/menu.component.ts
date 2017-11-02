import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu = [
    {
      name: "Food 1",
      price: 10
    },
    {
      name: "Food 2",
      price: 20
    },
    {
      name: "Food 3",
      price: 30
    }	
  ];

  constructor() { }

  ngOnInit() {
    
  }

}
