import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  menu: Array<{name: String, price: Number}>;
  
  constructor(private ms: MenuService) { 

  }

  ngOnInit() {
    this.menu = this.ms.getMenu();
  }

}
