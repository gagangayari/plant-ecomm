import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  items =[
    {
      'name': 'Malus domestica',
      'img': '../assets/1.jpeg',
      'price': 1230
    },
    {
      'name': 'Musa paradisiaca',
      'img': '../assets/2.jpeg',
      'price': 4230

    },
    {
      'name': 'Ficus benghalensis',
      'img': '../assets/3.jpeg',
      'price': 923

    },
    {
      'name': 'Piper nigrum',
      'img': '../assets/4.jpeg',
      'price': 992

    },
    {
      'name': 'Capsicum frutescens',
      'img': '../assets/5.jpeg',
      'price': 832

    },
    {
      'name': 'Syzygium aromaticum',
      'img': '../assets/6.jpeg',
      'price': 3201

    }
  ]

}
