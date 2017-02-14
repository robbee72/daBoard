(function() {
    function ModalCtrl($uibModalInstance, $scope, Player) {
        $scope.newPlayer = {};
        $scope.newPlayer.name = " Enter Player Name Here: ";
        
            $scope.closeModal = function(){
                $uibModalInstance.close()
            }
        
            $scope.submitModal = function() {
                $uibModalInstance.close($scope.newPlayer);
            }
        };
            
    
    angular
        .module('daBoard')
        .controller('ModalCtrl', ['$uibModal', ModalCtrl]);
})();