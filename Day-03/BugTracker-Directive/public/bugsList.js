angular.module('bugTrackerApp')
    .directive("bugsList", function(){
    return {
        restrict : 'E',
        controller : 'bugsController',
        templateUrl : 'bugsListTemplate.html',
        scope : {
            onAdd : '&',
            onRemove : '&'
        }
    }
});
