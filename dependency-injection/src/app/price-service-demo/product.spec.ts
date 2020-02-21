import { PriceServiceMock } from './price.service.mock';
import { Product } from './product.model.1';

describe('Product', () => {
  let product;

  beforeEach(() => {
    const service = new PriceServiceMock();
    product = new Product(service, 11);
  });

  it('is calculated based on the basePrice and the state', async () => {
    expect(product.totalPrice('FL')).toBe(11.66);
  });

});
