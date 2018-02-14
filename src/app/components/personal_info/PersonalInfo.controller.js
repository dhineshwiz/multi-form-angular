(function() {
  'use strict';
  angular
    .module('multiPageForm')
    .controller('PersonalInfo', [
      '$location',
      'PersonalInfoService',
      PersonalInfo
    ]);

  function PersonalInfo($location, PersonalInfoService) {
    var ctrl = this;
    ctrl.PersonalInfo = PersonalInfoService.get() || {};
    ctrl.previous = _previous;


    function _previous() {
      PersonalInfoService.put(ctrl.PersonalInfo);
      $location.path('social-profile');
    }
  }

})();