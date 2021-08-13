import { Component, OnInit } from '@angular/core';
import * as data from '../../pets.json';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
