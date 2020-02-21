// tslint:disable-next-line:interface-name
export interface IPriceService {

  calculateTotalPrice(basePrice: number, state: string): number;
}
