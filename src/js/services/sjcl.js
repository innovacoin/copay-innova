
'use strict';
angular.module('copayApp.services')
  .service('sjcl', function bitcoreFactory(bwcService) {
    var sjcl = bwcService.getSJCL();
    return sjcl;
  });
