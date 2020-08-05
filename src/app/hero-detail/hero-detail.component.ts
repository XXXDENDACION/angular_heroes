import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

export class HeroDetailComponent implements OnInit {
  hero: Hero = {
    name: '',
    description: '',
    email: ''
  };
  myForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
   this.getHero();


  }

  createForm() : void {
    this.myForm = new FormGroup({
      name: new FormControl(this.hero.name,[Validators.required]),
      description: new FormControl(this.hero.description, [Validators.required]),
      email: new FormControl(this.hero.email, [Validators.required,
                                               Validators.email
                                              ])
    })
    console.log("HeroDetailComponent -> this.hero", this.hero)

  }
  


  getHero() : void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = JSON.parse(localStorage.getItem(`hero${id}`))
    this.createForm();
  }

  save(): void {
    console.log(this.myForm);
    const id = +this.route.snapshot.paramMap.get('id');
    localStorage.setItem(`hero${id}`,JSON.stringify({
      id: id,
      name: this.myForm.value.name,
      description: this.myForm.value.description,
      email: this.myForm.value.email
    }))
    
  }

  goBack() : void {
    this.location.back();
  }

}
