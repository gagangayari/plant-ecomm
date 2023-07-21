import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() img : string = '';
  @Input() name : string = '';
  @Input() price : number = 0;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  buyNow(): void {
    this.router.navigate(['checkout']);

  }

}
