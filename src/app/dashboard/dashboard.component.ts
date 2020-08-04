import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor() {}

  ngOnInit(): void {
    this.getHeroesOnLocalStorage();
  }

  getHeroesOnLocalStorage() : void {
    const tempHeroes: Hero[] = [];
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if(key.includes('hero')) {
        const obj:Hero =JSON.parse(localStorage.getItem(key));
        tempHeroes.push(obj);   
      }
    });
    console.log(tempHeroes);
    this.heroes = tempHeroes;
  }
  
}
