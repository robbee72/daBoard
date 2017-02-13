(function() {
	function Message($firebaseArray, ) {
		var firebaseRef = new Firebase("https://daboard-ffc6d.firebaseio.com/");
		var teetimeRef = $firebaseArray(firebaseRef.child('teetimes'));
		
		return {
			send: function(newTeetime, playerID) {
				var teetime = {
					content: newteetime,
					sentAt: timeFormat(),
					playerID: playerID
				}
				messageRef.$add(message);
			}
		};
		
		function timeFormat() {
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();
			var dayNight = "AM";

			if (h > 12) {
				h -= 12;
				dayNight = "PM";
			}
			if (m < 10) {
				m = "0" + m;
			}
			if (s < 10) {
				s = "0" + s;
			}
			return h + ":" + m + " " + dayNight;
		}
	}
	
	angular
		.module('daBoard')
		.factory('Teetime', ['$firebaseArray',  TeeTime]);
})();