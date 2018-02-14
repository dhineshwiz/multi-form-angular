(function() {
  'use stricth';
  angular
    .module('multiPageForm')
    .controller('SocailProfileCtrl', ['$location',
      'SocailProfileService',
      SocailProfileCtrl
    ]);

  function SocailProfileCtrl($location, SocailProfileService) {
    var ctrl = this;
    ctrl.SocailProfile = SocailProfileService.get() || {};
    ctrl.previous = _previous;
    ctrl.next = _next;

    function _previous() {
      SocailProfileService.put(ctrl.PersonalInfo);
      $location.path('account-setup');
    }

    function _next() {
      SocailProfileService.put(ctrl.PersonalInfo);
      $location.path('personal-info');
    }

  }

})();