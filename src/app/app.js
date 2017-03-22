(function(){
  'use strict';

  angular.module('app', [ 'ngMaterial', 'gridster', 'angular-loading-bar', 'weatherApp' ]).run([
    '$state', 'api', function($state, api) {
        api.isSignedIn().then(function(data){
        
        }).catch(function(error){
            $state.go('login');
        });
    }
  ]);

})();
