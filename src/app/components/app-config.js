(function() {
  'use strict';

  angular.module('multiPageForm')
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider, $locationProvider) {
        $routeProvider
          .when('/account-setup', {
            templateUrl: 'app/components/account_setup/account_setup.html',
            label: 'Account Setup'
          })
          .when('/personal-info', {
            templateUrl: 'app/components/personal_info/personal_info.html',
            label: 'personal Info'
          })
          .when('/social-profile', {
            templateUrl: 'app/components/social_profiles/social_profiles.html',
            label: 'Socail Profile'
          })
          .when('/404', {
            templateUrl: 'app/404.html'
          })
          .otherwise({
            redirectTo: '/account-setup'
          });

        $locationProvider.html5Mode(true);
      }
    ])
})();