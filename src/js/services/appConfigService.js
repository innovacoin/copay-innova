'use strict';

angular.module('copayApp.services').service('appConfigService', function($window) {
  return $window.appConfig;
});
