import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
   this.getHero();
  }

  getHero() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = JSON.parse(localStorage.getItem(`hero${id}`))
  }

  save(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    localStorage.setItem(`hero${id}`,JSON.stringify(this.hero))
  }

  goBack() : void {
    this.location.back();
  }

}
