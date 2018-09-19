import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';


const ST_NAME = 'WINE_STORE_STORAGE';

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private storage: Storage = window.localStorage;
  private storage_data: Array<Object> = JSON.parse(this.storage.getItem(ST_NAME));

  constructor() {
    if (this.storage_data === null) {
      this.storage_data = [];
    }
  }

  getShopCart(): Observable<Array<Object>> {
    return new Observable(observer => {
      observer.next(this.storage_data.filter(item => item !== null));
      observer.complete();
      return {unsubscribe() {}};
    });
  }

  // Array<id: {id: id, title:title, price:price, count: count, sum:price*count}>
  add(vine: Object) {
    let item = this.storage_data[vine['id']];
    if (item != null) {
      item['count'] += 1;
      item['sum'] += item['price'];
    } else {
      item = {id: vine['id'], title: vine['title'], price: vine['price']};
      item ['count'] = 1;
      item ['sum'] = item['price'];
    }
    this.storage_data[vine['id']] = item;
    this.updateData();
  }

  delete(id: number) {
    if (this.storage_data[id] != null) {
      this.storage_data[id] = null;
    } else {
      throw(Error('item not contains in shopCart'));
    }
    this.updateData();
  }

  remove(id: number) {
    const item = this.storage_data[id];
    if (item != null) {
      if (item['count'] === 1) {
        item['count'] = 0;
        this.delete(id);
      } else {
        item['count'] -= 1;
        item['sum'] -= item['price'];
        this.storage_data[id] = item;
        this.updateData();
      }
    } else {
      throw(Error('item not contains in shopCart'));
    }
  }

  clear() {
    this.storage_data = [];
    this.updateData();
  }

  updateData() {
    this.storage.setItem(ST_NAME, JSON.stringify(this.storage_data));
  }
}
