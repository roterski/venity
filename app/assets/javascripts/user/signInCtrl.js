(function() {
  'use strict';
  angular
    .module('venity')
    .controller('SignInCtrl', SignInCtrl);

    SignInCtrl.$inject = ['AuthFactory'];

    function SignInCtrl(AuthFactory) {
      var vm = this;
      vm.authFactory = AuthFactory;
      vm.getErrors = AuthFactory.getErrors;
      vm.signIn = AuthFactory.signIn;

      AuthFactory.clearErrors();
    }
})();
