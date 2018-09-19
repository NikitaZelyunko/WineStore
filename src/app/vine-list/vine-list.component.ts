import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import { ShopCartService } from '../shop-cart.service';

import {Vine} from '../Vine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vine-list',
  templateUrl: './vine-list.component.html',
  styleUrls: ['./vine-list.component.css']
})
export class VineListComponent implements OnInit {

  vines: Vine[] = [];
  constructor(
    private dataService: DataService,
    private shopCartService: ShopCartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataService.getVines().subscribe(vines => this.vines = vines);
  }

  goToVine(event: Event, vine: Vine) {
    if (event.target['className'] !== 'add') {
      this.router.navigate(['vine/' + vine.id.toString()]);
    }
  }

  toCart(vine: Vine) {
    this.shopCartService.add(vine);
  }

}
