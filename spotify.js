var myApp = angular.module('spotifyApp', []);

myApp.controller('SpotifyController', function($scope, $http){
    $scope.message = "Hello";
    
    $scope.search = function() {
        
        // Simple GET request example:
        $http({
        method: 'GET',
        url: 'https://api.spotify.com/v1/search',
        params: { type: 'artist', q:$scope.artist}
        }).then(function successCallback(response) {
            console.log(response.data.artists.items);
            $scope.artists = response.data.artists.items;
        // this callback will be called asynchronously
        // when the response is available
        }, function errorCallback(response) {
            console.log("ERROR");
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        });
    };
});