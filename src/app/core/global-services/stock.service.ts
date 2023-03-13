import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stock = [
    { type: 'banana', amount: 10 },
    { type: 'bamboo', amount: 2 }
  ];
  private stockSubject$ = new BehaviorSubject<any>(this.stock);

  getStock(): Observable<any> {
    return this.stockSubject$.asObservable();
  }

  removeFromStock(type: string) {
    let len = this.stock.length;
    while (len--) {
      if (this.stock[len].type === type) {
        this.stock[len].amount--;
        break;
      }
    }

    this.stockSubject$.next(this.stock);
  }
}
