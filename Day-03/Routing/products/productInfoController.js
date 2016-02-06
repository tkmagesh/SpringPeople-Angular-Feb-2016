angular.module("myApp.products")
    .controller("productInfoController", function(productsService, $scope, $routeParams){
            var pid = parseInt($routeParams.pid);
            $scope.product = productsService.get(pid);
        });
