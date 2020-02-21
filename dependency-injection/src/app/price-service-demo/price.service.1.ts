import { Injectable } from '@angular/core';
import { IPriceService } from './price-service.interface';

@Injectable()
export class PriceService {
  constructor() {
  }

  calculateTotalPrice(basePrice: number, state: string) {
    const tax = Math.random();

    return basePrice + tax;
  }
}
