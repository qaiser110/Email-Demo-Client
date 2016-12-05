/**
 * Created by qaiser on 1/12/2016.
 */
(function () {
  "use strict";

  angular
      .module("common.services")
      .factory("MailService",
          ["$http",
            MailService]);

  function MailService($http) {

    var sendEmail = function (data) {

      return $http.post('http://localhost:3000/send-mail', data);

    };

    return {
      sendEmail: sendEmail
    }
  }

}());
