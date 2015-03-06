function MyCtrl($scope, $http) {
	
	var mainInfo = $http.get('data.json').success(function(response) {
		$scope.items = response;
	});
	
	
	
	$scope.years = [
        { year: '2011', yearId: 2011 },
        { year: '2012', yearId: 2012 },
        { year: '2013', yearId: 2013 },
        { year: '2014', yearId: 2014 }
    ];
}


