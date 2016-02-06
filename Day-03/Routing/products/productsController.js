angular.module("myApp.products")
    .controller("productsController", function(productsService, $scope){
            $scope.products = productsService.getAll();
        });
