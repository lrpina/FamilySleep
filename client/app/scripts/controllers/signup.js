'use strict';

angular.module('FamilySleep') // make sure this is set to whatever it is in your client/scripts/app.js
	.controller('SignupCtrl', function ($scope, $http, $sanitize) { // note the added $http depedency
		
		// Here we're creating some local references
		// so that we don't have to type $scope every
		// damn time
		var user,
				signup,
				members;
		var member = {};
		var count = 1;

		// Here we're creating a scope for our Signup page.
		// This will hold our data and methods for this page.
		$scope.member = member;
		$scope.signup = signup = {};
		$scope.signup.user = user = {};
		$scope.signup.user.members = members = [];
		//$scope.members = [];
		$scope.isAddMemberForm = false; 
		$scope.profilePicItems = [
			{name:'pic1',
			path:'images/avatars/boycircle.png'},
			{name:'pic1',
			path:'images/avatars/dadcircle.png'},
			{name:'pic1',
			path:'images/avatars/girlcircle.png'},
			{name:'pic1',
			path:'images/avatars/momcircle.png'}, 
		]

		// In our signup.html, we'll be using the ng-model
		// attribute to populate this object.

		signup.addNewMember = function() {
			if (
				!member.name ||
				!member.type ||
				!member.profilePic 
				//||!member.fitbitId
			) {
				alert('Please fill out all form fields.');
				return false;
			}

			member.pid = 'm' + count;
			count++;
			console.log(member);
			var newMember = angular.copy(member);
			members.push(newMember);
			member.name = "";
			member.type = "";
			member.profilePic = "";
			member.fitbitId = "";
			member.pid = "";
			console.log(members);
		}

		signup.addMembers = function() {
			if (
				!user.famId ||
				!user.lastname ||
				!user.password1 ||
				!user.password2
			) {
				alert('Please fill out all form fields.');
				return false;
			}

			// make sure the passwords match match
			if (user.password1 !== user.password2) {
				alert('Your passwords must match.');
				return false;
			}
			console.log(user);
			$scope.isAddMemberForm = true;
		}

		signup.cancel = function() {
			user.famId = '';
			user.lastname = '';
			user.password1 = '';
			user.password2 = '';
			$scope.isAddMemberForm = false;
			$scope.members = [];
		}

		// This is our method that will post to our server.
		signup.submit = function () {
			
			// make sure all fields are filled out...
			// aren't you glad you're not typing out
			// $scope.signup.user.firstname everytime now??
			signup.addNewMember();
			var json = JSON.stringify($scope.signup);

			console.log(json); 
			signup.cancel();

			// Make the request to the server ... which doesn't exist just yet
			var request = $http.post('/signup', user);

			// we'll come back to here and fill in more when ready
			request.success(function (data) {
				 console.log(data.msg);
			});

			request.error(function (data) {
				 console.log(data.msg);
			});

		};
		
	});