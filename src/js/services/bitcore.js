'use strict';
angular.module('copayApp.services')
  .service('bitcore', function bitcoreFactory(bwcService) {
    var bitcore = bwcService.getBitcore();
    return bitcore;
  });
