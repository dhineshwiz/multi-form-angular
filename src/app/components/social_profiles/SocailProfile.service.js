(function() {
  'use strict';

  angular.module('multiPageForm')
    .service('SocailProfileService',
      function() {
        this.SocailProfile = {};

        function _set(accountSetup) {
          this.SocailProfile = accountSetup;
        }

        function _get() {
          return this.SocailProfile
        }

        return {
          put: _set,
          get: _get
        }

      });
})();