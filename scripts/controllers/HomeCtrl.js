(function() {
    function HomeCtrl(Player, $uibModal) {
        this.daPlayers = Player.all;  
        var Home = this; 
        Home.playerService = Player;
        Home.selectPlayer = function(player) {
            Home.selectedPlayer = player;
            Home.teetimes = Player.getTeetimes(this.selectedPlayer.$id);
        }  
        this.openModal = function() {
            var modalInstance = $uibModal.open({
               templateUrl: '/templates/modal.html',
                controller: "ModalCtrl"
                       });   
       modalInstance.result.then(function (selectedItem) {
                this.selected = selectedItem;
        Home.playerService.addPlayer(selectedItem);
                });
        }                
    }
    angular
        .module('daBoard')
        .controller('HomeCtrl',  ['Player', '$uibModal', HomeCtrl]);
})();
