(function() {
    function ModalCtrl($uibModalInstance, $scope, Player) {
        $scope.newPlayer = {};
        $scope.newPlayer.name = "  ";
        
            $scope.closeModal = function(){
                $uibModalInstance.close()
            }
        
            $scope.submitModal = function() {
                $uibModalInstance.close($scope.newPlayer);
            }
        };
            
    
    angular
        .module('myApp')
        .controller('ModalCtrl',  ModalCtrl);
})();