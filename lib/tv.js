'use strict';

let television = {
  sizeInInches: 50,
  priceInUSD: 650,
  brand: 'Samsung',
  builtInSpeakers: true,
  resolution:'4K',
  isOnSale: true,
  percentageOff:[0.15, 0.25, 0.40],
  calculateSalePrice: function(pctOffIndex){
    if(this.isOnSale){
      let salePriceOff = this.priceInUSD*this.percentageOff[pctOffIndex];
      let salePrice = this.priceInUSD - salePriceOff;
      this.priceInUSD = salePrice;
    }
  }
};
