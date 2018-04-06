 var config = {
     apiKey: "AIzaSyCM8FCF0W2EuxjhGpxfA77BhGCoPVmOWVs",
     authDomain: "chatroom-6de21.firebaseapp.com",
     databaseURL: "https://chatroom-6de21.firebaseio.com",
     projectId: "chatroom-6de21",
     storageBucket: "chatroom-6de21.appspot.com",
     messagingSenderId: "981508170724"
 };
 firebase.initializeApp(config);

 angular.module('starter', ['ionic'])

 .run(function($ionicPlatform) {
         $ionicPlatform.ready(function() {
             if (window.cordova && window.cordova.plugins.Keyboard) {
                 cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                 cordova.plugins.Keyboard.disableScroll(true);
             }
             if (window.StatusBar) {
                 StatusBar.styleDefault();
             }
         });
     })
     .controller('appCntrl', function($scope, $http) {

         $scope.Username = "Purushottam"
         $scope.chatTopic = "School";

         $scope.makeChatroom = function() {
             console.log("R-- makeChatroom");
             console.log($scope.chatTopic);
             firebase.database().ref($scope.chatTopic).set({
                 Name: "Admin",
                 Message: "Chat topic ",
             })
         }


         $scope.enterRoom = function() {
             console.log("dfndsd");
             console.log($scope.roomName);
             $scope.chatTopic = $scope.roomName;
         }
         const preObject = document.getElementById("display");
         var Ref001 = firebase.database().ref($scope.chatTopic);
         Ref001.on('value', function(datasnapshot) {
             var data = datasnapshot.val();
             console.log($scope.data);
             var htmlText = '';
             for (var key in data) {
                 htmlText += '<div  class="talk-bubble tri-right left-top">';
                 htmlText += '<div class="talktext">';
                 htmlText += '<p class="title">' + data[key].Name + '</p>';
                 htmlText += '<p>' + data[key].Message + '</p>';
                 htmlText += '</div>';
                 htmlText += '</div>';
             }
             preObject.innerHTML = htmlText;
         })


         $scope.UID = "Purushottam"
         $scope.send = function() {
             console.log($scope.message);
             firebase.database().ref('/' + $scope.chatTopic).push().set({
                 Name: $scope.Username,
                 Message: $scope.message,
             })
         }


     }) // Controller ENDING