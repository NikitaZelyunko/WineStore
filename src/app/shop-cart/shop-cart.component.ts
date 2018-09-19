import { Component, OnInit } from '@angular/core';
import { ShopCartService } from '../shop-cart.service';

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

  remove(item: Object) {
    this.shopCartService.remove(item['id']);
    const index = this.shopList.indexOf(item);
    if (this.shopList[index]['count'] === 0) {
      this.shopList.splice(index, 1);
    }
  }

  delete(item: Object) {
    this.shopCartService.delete(item['id']);
    const index = this.shopList.indexOf(item);
    this.shopList.splice(index, 1);
  }

  total(): number {
    return this.shopList.reduce((acc, item) => acc + item['sum'], 0);
  }
}
