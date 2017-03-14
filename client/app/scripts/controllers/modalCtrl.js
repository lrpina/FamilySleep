'use strict';
angular.module('FamilySleep').controller('ModalCrtl', function($uibModal, $log, $document){
  var templateDir = 'views/templates/';
	var $ctrl = this;	 
	var moodImages = [
		{ 	name:'good',
			image:'images/faces/good.PNG'
		}, 
		{	name:'happy',
			image:'images/faces/happy.PNG'
		},
		{	name:'nightmare',
			image: 'images/faces/nightmare.PNG'
		},
		{	name:'sneaky',
			image: 'images/faces/sneaky.PNG'
		},
		{	name:'tired',
		 	image:'images/faces/tired.PNG'
		},
		{	name:'tired_more',
		 	image:'images/faces/tired_more.PNG'
		},
		{	name:'tired',
		 	image:'images/faces/tired.PNG'
		}];
  $ctrl.items = moodImages;
	//var avatars = [];
  var avatar = 'images/avatars/momcircle.PNG';
	$ctrl.profile = avatar;
  //family members
  /****IMPORTANT I don't know how to add members dynamically**/
  $ctrl.famMems = ['mom', 'dad', 'child1', 'child2'];
	$ctrl.animationsEnabled = true;

  //could make an arg for fcn where we take the template that we want to use.
  //this could be that now we can use 
	$ctrl.open = function (size, parentSelector) {
		$log.info("in open of ModalCrtl"); //added this might need to pass log
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    //using
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: templateDir+'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        famMems: function(){ //I don't understand what this does
          return $ctrl.famMems;
        }
      }
    });
    modalInstance.result.then(function (selectedItem1, selectedFam) {
    	$log.info("in modalInstant result");
      $ctrl.selected = selectedItem1;
      $ctrl.selectedFam = selectedFam;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

angular.module('FamilySleep').controller('ModalInstanceCtrl', function ($uibModalInstance, items, famMems, $log) {
  var $ctrl = this;
  $ctrl.items = items;
  //creating an object
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.famMems = famMems;
  //creating an object
  $ctrl.selectedFam = {
    item: $ctrl.famMems[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item, $ctrl.selectedFam.item);
    $log.info("inside ModalInstanceCtrl");
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});