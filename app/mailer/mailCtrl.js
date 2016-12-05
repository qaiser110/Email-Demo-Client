/**
 * Created by qaiser on 1/12/2016.
 */
(function () {
  "use strict";
  angular
      .module("mailApp")
      .controller("MailCtrl",
          [ "MailService",
            MailCtrl]);

  function MailCtrl(MailService) {
    var vm = this;
    vm.email = {};
    vm.responseMessage = '';

    var onMailSuccess = function (res) {
      vm.reset();
      vm.response = res.data;
      vm.responseMessage = 'Message sent successfully via ' + res.data.provider;
    };
    var onMailError = function (res) {
      vm.response = res.data;
      vm.responseMessage = res.data && res.data.message;
    };

    vm.submit = function() {
      vm.response = false;
      MailService.sendEmail(vm.email)
      .then(onMailSuccess, onMailError);
    };

    vm.reset = function() {
      vm.email = {};
    };
  }
}());
