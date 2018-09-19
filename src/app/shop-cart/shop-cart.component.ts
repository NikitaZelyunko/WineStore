import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../shop-cart.service';
import { Vine } from '../Vine';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  shopList: Array<Object> = [];

  constructor(private shopCartService: ShopCartService) { }

  ngOnInit() {
    this.shopCartService.getShopCart().subscribe(list => this.shopList = list);
  }

  add(item: Object) {
    this.shopCartService.add(item);
  }
  remove(item: Object, id: number) {
    this.shopCartService.remove(item['id']);
  }
}
