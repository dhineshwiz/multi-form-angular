(function() {
  'use strict';

  angular.module('multiPageForm')
    .service('PersonalInfoService',
      function() {
        this.PersonalInfo = {};

        function _set(accountSetup) {
          this.PersonalInfo = accountSetup;
        }

        function _get() {
          return this.PersonalInfo
        }

        return {
          put: _set,
          get: _get
        }

      });
})();