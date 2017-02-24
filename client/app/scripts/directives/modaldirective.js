'use strict';

/**
 * @ngdoc directive
 * @name FamilySleep.directive:modalDirective
 * @description
 * # modalDirective
 */

/*angular directive has exmaples iwth timeout functions taht might be useful later on**/
//maybe -- var templateDir = 'templates/';
/*vBest Practice: Use the scope option to create isolate scopes 
when making components that you want to reuse throughout your app.*/

angular.module('FamilySleep')
  .directive('modalDirective', function ($modal, $log) {
    return {
    	transclude: true; //only uses this when ythe directive weraps arbitrary content
     	restrict: 'EA',
        template: '<a ng-click="open()" ng-transclude>{{name}}</a>',
        scope: {
            useCtrl: "@",
            email: "@"
        },
      link: function (scope, element, attrs) { //used to becalled function postLink() not sure how this works
        //element.text('this is the modalDirective directive');
        console.log('attrs: ' attrs);
        log.info('attrs: ' + attrs);
        scope.open = function(){
        	var modalInstance = $modal.open({
                templateUrl: templateDir+attrs.instanceTemplate +'.tpl.html',
                controller:  scope.useCtrl,
                size: 'lg',
                windowClass: 'app-modal-window',
                backdrop: true,
                resolve: {
                    custEmail: function(){
                        return {email: scope.email};
                    }
                }

            });
        	modalInstance.result.then(function(){
                    console.log('Finished');
                }, function(){
                    console.log('Modal dismissed at : ' + new Date());
                });
        };
      }
    };
  });
