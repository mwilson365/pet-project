import { Component, OnInit } from '@angular/core';
import data from '../../pets.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pets = data;
  featurePets: any;

  constructor() { }

  ngOnInit(): void {
    this.featurePets = this.pets.pets.filter((pet) => pet.featured);
  }

}
