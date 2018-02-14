(function() {
  'use strict';

  angular.module('multiPageForm')
    .service('AccountSetupService',
      function() {
        this.AccountSetup = {};

        function _set(accountSetup) {
          this.AccountSetup = accountSetup;
        }

        function _get() {
          return this.AccountSetup
        }

        return {
          put: _set,
          get: _get
        }

      });
})();