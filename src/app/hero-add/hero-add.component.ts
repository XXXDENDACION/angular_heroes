import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss']
})

export class HeroAddComponent implements OnInit {

  @Output() onAdd: EventEmitter<Hero> = new EventEmitter<Hero>()
  id: number = 1;
  hero: Hero ={
    id: parseInt(localStorage.getItem(`id`)),
    name: '',
    description: '',
    email: '',
  } 

  constructor() { }

  ngOnInit(): void {
    this.addIdInStorage();
  }

  addIdInStorage() : void {
    if(!localStorage.getItem(`id`))
      localStorage.setItem(`id`,`${this.id}`);
    this.id = parseInt(localStorage.getItem(`id`));
  }
  
  addHeroes(): void {
    if(this.hero.name.trim() && this.hero.description.trim() && this.hero.email.trim() ) {
      localStorage.setItem(`hero${this.id}`, JSON.stringify(this.hero));
      this.id++;
      localStorage.setItem(`id`,`${this.id}`);
      this.onAdd.emit(this.hero);
    }
    this.hero.description = '';
    this.hero.email = '';
    this.hero.name = '';
  }
}
