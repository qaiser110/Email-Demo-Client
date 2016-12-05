/**
 * Created by qaiser on 2/12/2016.
 */
(function () {
  "use strict";

  var EMAIL_REGEXP = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;

  angular
      .module("common.directives")
      .directive("emails", function() {
        return {
          require: 'ngModel',
          link: function(scope, elm, attrs, ctrl) {
            ctrl.$validators.emails = function(modelValue, viewValue) {

              if (ctrl.$isEmpty(modelValue)) {
                return true;
              }

              var validEmails = true;
              viewValue
                  .replace(/\s/g, '')
                  .split(',').forEach(function (val) {
                    if (!EMAIL_REGEXP.test(val)) {
                      validEmails = false;
                    }
                  });

              return validEmails;
            };
          }
        };
      });

}());