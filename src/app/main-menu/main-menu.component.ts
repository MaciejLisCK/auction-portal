import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'ap-main-menu',
  templateUrl: './main-menu.component.html',
  styles: [`
  nav {
    background-color: aqua;
  }`]
})
export class MainMenuComponent implements OnInit {
  isMenuShown = true;
  menuItems: MenuItem[] = [
    { link: 'auctions', title: 'Aukcje' },
    { link: 'promotions', title: 'Promocje' },
    { link: 'advices', title: 'Podpowiadamy' },
  ];

  toggleMenu(event: MouseEvent) {
    this.isMenuShown = !this.isMenuShown;
    console.log(this);
  }

  constructor() { }

  ngOnInit() {
  }

}
