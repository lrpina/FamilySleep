'use strict';
angular.module('FamilySleep').controller('ModalCrtl', function($uibModal, $log, $document){
	var $ctrl = this;
	//might need to go into apps.js need to figure how to moveit around
	var mood_images = [
		{ 	name:'good',
			image:"images/good.PNG"
		}, 
		{	name:'happy',
			image:"images/happy.PNG"
		},
		{	name:'nightmare',
			image: "images/nightmare.PNG"
		},
		{	name:'sneaky',
			image: "images/sneaky.PNG"
		},
		{	name:'tired',
		 	image:"images/tired.PNG"
		},
		{	name:'tired_more',
		 	image:"images/tired_more.PNG"
		},
		{	name:'tired',
		 	image:"images/tired.PNG"
		}];
	//$ctrl.items = ['item1', 'item2', 'item3']; 
	$ctrl.items = mood_images;
	//the above is where I would put the images which I believe are buttons
	$ctrl.animationsEnabled = true;
	$ctrl.changeToImage = false;

	$ctrl.open = function (size, parentSelector) {
		$log.info("in open of ModalCrtl"); //added this might need to pass log
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });
    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };
  /**$ctrl.openMultipleModals = function () { //don't need this function
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'bottom';  
      }
    });

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-top',
      ariaDescribedBy: 'modal-body-top',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'top';  
      }
    });
  };*/
   $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('FamilySleep').controller('ModalInstanceCtrl', function ($uibModalInstance, items, $log) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
    $log.info("inside ModalInstanceCtrl");
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

// Please note that the close and dismiss bindings are from $uibModalInstance.

angular.module('FamilySleep').component('modalComponent', {
  templateUrl: 'myModalContent.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var $ctrl = this;

    $ctrl.$onInit = function () {
      $ctrl.items = $ctrl.resolve.items;
      $ctrl.selected = {
        item: $ctrl.items[0]
      };
    };

    $ctrl.ok = function () {
      $ctrl.close({$value: $ctrl.selected.item});
      $log.info("inside modalComponent does not seem to get here?");
    };

    $ctrl.cancel = function () {
      $ctrl.dismiss({$value: 'cancel'});
    };
  }
});

//<img ng-src={{ path }}/>
/*
to create a ist of images  but I need to use ng-repeat to create a list of buttons that are images
 <ul class="img-thumbnails clearfix">
          <li class="small-image pull-left thumbnail" ng-repeat="image in product.images">
            <img ng-src="{{image}}" />
          </li>
        </ul>
*/
//inheritance between controllers for the images