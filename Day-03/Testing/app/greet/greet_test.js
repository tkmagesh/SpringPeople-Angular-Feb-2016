describe("greet module", function(){
    beforeEach(module("myApp.greet"));

    describe("greetController", function(){
        it("should initialize name with empty string", inject(function($controller){
            var dummyScope = {};
            $controller('greetController', {$scope : dummyScope});
            expect(dummyScope.name).toBe('');
        }));
        it("should initialize message with empty string", inject(function($controller){
            var dummyScope = {};
            $controller('greetController', {$scope : dummyScope});
            expect(dummyScope.message).toBe('');
        }));
        it("should initialize message with greeting message when greeted", inject(function($controller){
            var dummyScope = {};
            $controller('greetController', {$scope : dummyScope});
            dummyScope.name = 'Magesh';
            var expectedMessage = 'Hi Magesh, Have a nice day!';
            dummyScope.greet();
            expect(dummyScope.message).toBe(expectedMessage);
        }));
    });
});
