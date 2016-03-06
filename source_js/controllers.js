/* Sample Controller */
app.controller('listController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
	$scope.filterString = "";
	$scope.filteredMovies = {};
	$scope.ascending = "Ascending";
	$scope.orderBy = "title";

	$http.get('data/imdb250.json').success(function (data) {
		$scope.movies = data;
		console.log(data);
	}).error(function (err){
		console.log(err);
	});

	$scope.filterMovies = function() {
		$scope.filteredMovies = $filter('filter')($scope.movies, $scope.filterString);
		$scope.order();
	}

	$scope.order = function() {
		if($scope.ascending == "Ascending") {
			$scope.filteredMovies = $filter('orderBy')($scope.filteredMovies, $scope.orderBy, false);
		}
		else {
			$scope.filteredMovies = $filter('orderBy')($scope.filteredMovies, $scope.orderBy, true);
		}
	}

	$scope.$watch('filterString', $scope.filterMovies, true);
	$scope.$watch('orderBy', $scope.order, true);
	$scope.$watch('ascending', $scope.order, true);
}]);


app.controller('galleryController', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
	$scope.genre = "All";

	$http.get('data/imdb250.json').success(function (data) {
		$scope.movies = data;
		$scope.filteredMovies = data;
		console.log(data);
	}).error(function (err){
		console.log(err);
	});
	
	$scope.filterMovies = function() {
		console.log($scope.genre);
		if($scope.genre == "All"){
			$scope.filteredMovies = $scope.movies;
		}
		else {
			$scope.filteredMovies = $filter('filter')($scope.movies, filterGenre);
		}
	}
	var filterGenre = function(value, index, array) {
		return value.genre.indexOf($scope.genre) >= 0;
	}

	$scope.$watch('genre', $scope.filterMovies, true);
}]);


app.controller('detailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.rank = $routeParams.rank;
	$scope.genre = "all";

	$http.get('data/imdb250.json').success(function (data) {
		$scope.movies = data;
		$scope.movie = data[$scope.rank-1];
		console.log(data);
	}).error(function (err){
		console.log(err);
	});
}]);