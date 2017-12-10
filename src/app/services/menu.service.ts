import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  menu: Array<{name: String, price: Number}>;
  
  constructor() { 
    this.menu = [
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
  }
  
  getMenu(){
    return this.menu;
  }

}
