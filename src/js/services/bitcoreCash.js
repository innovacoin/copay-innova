'use strict';
angular.module('copayApp.services')
  .service('bitcoreCash', function bitcoreFactory(bwcService) {
    var bitcoreCash = bwcService.getBitcoreCash();
    return bitcoreCash;
  });
