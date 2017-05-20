'use strict';
/*** TODO need to add mood selected to the sleep object **/
angular.module('FamilySleep').controller('ModalCrtl', ['selfReportState', '$uibModal', '$log', '$document', function(selfReportState, $uibModal, $log, $document){
  var templateDir = 'views/templates/';
	var $ctrl = this;	 
	var moodImages = [
		{ 	name:'good',
			image:'images/faces/good.png'
		}, 
		{	name:'happy',
			image:'images/faces/happy.png'
		},
		{	name:'nightmare',
			image: 'images/faces/nightmare.png'
		},
		{	name:'sneaky',
			image: 'images/faces/sneaky.png'
		},
		{	name:'tired',
		 	image:'images/faces/tired.png'
		},
		{	name:'tired_more',
		 	image:'images/faces/tired_more.png'
		},
		{	name:'tired',
		 	image:'images/faces/tired.png'
		}];
  $ctrl.items = moodImages;
	//var avatars = [];
  //var avatar = 'images/avatars/momcircle.png';
	//$ctrl.profile = avatar;
  //family members
  /****IMPORTANT I don't know how to add members dynamically**/
  $ctrl.famMems = ['mom', 'dad', 'child1', 'child2'];
	$ctrl.animationsEnabled = true;
  /**asigning selfReportState factory to states to have access in the viewer*/
  $ctrl.states = selfReportState;
  
  /*console.log("in ModalCrtl");
  if(!$ctrl.states.mom.state){
      console.log("in the initial state");
      console.log ($ctrl.states.mom.state);
  }
  $ctrl.states.mom.state = selfReportState.mom.state = true;
  $ctrl.states.mom.image = selfReportState.mom.image = 'images/faces/tired.png';
    if(selfReportState.mom.state){
    console.log ($ctrl.states.mom.image);  
  }*/
  //could make an arg for fcn where we take the template that we want to use.
  //this could be that now we can use 
	$ctrl.open = function (famID) {
		$log.info("in open of ModalCrtl"); //added this might need to pass log
    console.log(famID);
    var fam = famID;
    //var temp = $ctrl.states[fam];
    console.log($ctrl.states[famID]);
    console.log("using variable to also accessSelfreportState");
    console.log(selfReportState[famID]);
    //var parentElem = parentSelector ? 
      //angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
    //using
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: templateDir+'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      windowClass:'app-modal-window',
      //size: size,
      //appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        },
        famMems: function(){ //I don't understand what this does
          return $ctrl.famMems;
        }
      }
    });
    modalInstance.result.then(function (selectedItems) {
      $ctrl.selected = selectedItems.selected;
      $ctrl.selectedFam = selectedItems.selectedFam;
      $ctrl.states[famID].state = selfReportState[famID].state = true;
      $ctrl.states[famID].mood = selfReportState[famID].mood = selectedItems.selected.name;
      $ctrl.states[famID].image = selfReportState[famID].image = selectedItems.selected.image;

      $log.info("******in modalsIntance result");
      $log.info(selectedItems.selected.name);
      $log.info(selectedItems.selected.image);
      $log.info("from $ctrl states");
      $log.info($ctrl.states[famID].state);
      $log.info($ctrl.states[famID].mood);
      $log.info($ctrl.states[famID].image);
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
}]);

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
    $uibModalInstance.close({selected: $ctrl.selected.item, selectedFam: $ctrl.selectedFam.item});
    $log.info("inside ModalInstanceCtrl OK");
    $log.info($ctrl.selected.item);
    $log.info($ctrl.selectedFam.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});