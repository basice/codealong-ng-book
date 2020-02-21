import { Injectable } from '@angular/core';
import { IPriceService } from './price-service.interface';

@Injectable()
export class PriceServiceMock implements IPriceService {
  constructor() {
  }

  calculateTotalPrice(basePrice: number, state: string) {
    if (state === 'FL') {
      return basePrice + 0.66;
    }

    return basePrice;
  }
}
