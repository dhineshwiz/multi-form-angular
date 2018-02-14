(function() {
  'use strict';
  angular.module('multiPageForm')
    .controller('AccountSetupCtrl', [
      '$location',
      'AccountSetupService',
      function AccountSetupCtrl($location,AccountSetupService) {
        var ctrl = this;
        ctrl.next = _next;
        ctrl.AccountSetup = AccountSetupService.get() || {};

        function _next() {
          AccountSetupService.put(ctrl.AccountSetup);
          $location.path('social-profile');
        }
      }
    ]);
})();