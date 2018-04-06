(function() {
    
	var module = angular.module('smoodifyApp');

	module.factory('SpotifyAPI', function($q, $http, $cookies) {

		var baseUrl = 'https://api.spotify.com/v1';
		var msToMS = function(ms) {
			var minutes = Math.floor(ms / 60000);
  			var seconds = ((ms % 60000) / 1000).toFixed(0);
  			return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
		}

		var getTracksOffset = function(offset) {
			var ret = $q.defer();
			$http.get(baseUrl + '/me/tracks?offset=' + offset + '&limit=50', {
				headers: {
					'Authorization': 'Bearer ' + $cookies.token
				}
			}).success(function(data) {
				ret.resolve(data.items.map( (ele)  => ele.track ));
			});

			return ret.promise;
		}

		var numTracks = function() {
			var ret = $q.defer();
			$http.get(baseUrl + '/me/tracks', {
				headers: {
					'Authorization': 'Bearer ' + $cookies.token
				}
			}).then(function(data) {
				ret.resolve(data.data.total);
			});
			return ret.promise;
		}

		var numTracksArray = function() {
			var defer = $q.defer();
			numTracks().then(function(numTracks) {
				var arr = [];
				for (let i = 0; i < numTracks; i = i + 50) {
					arr.push(i);
				}
				defer.resolve(arr);
			});
			return defer.promise;
		}

		return {
			getTracks: function () {
				var allDeferred = $q.defer();
				numTracksArray().then(function(arr) {
					var promises = [];
					arr.map(function(i) {
						promises.push(getTracksOffset(i));
					});

					$q.all(promises).then(function(d) {
						var allTracks = [];
						d.forEach((r) => {
							Array.prototype.push.apply(allTracks, r);
						});
						allDeferred.resolve(allTracks);
					});
				});
				
				return allDeferred.promise;
			},

			getAlbums: function() {
				var allAlbums = [];
				$http.get(baseUrl + '/me/albums?limit=50', {
					headers: {
						'Authorization': 'Bearer ' + $cookies.token
					}
				}).then(function(data) {
					if (data.items) {
						data.items.forEach((ele) => {
							allAlbums.push(ele.album);
						});
					}
					var songsLeft = data.data.total;
					for (var offset = 0; offset <= songsLeft; offset = offset + 50) {
						$http.get(baseUrl + '/me/albums?offset=' + offset + '&limit=50', {
							headers: {
								'Authorization': 'Bearer ' + $cookies.token
							}
						}).success(function(data) {
							if (data.items) {
								data.items.forEach((ele) => {
									allAlbums.push(ele.album);
								});
							}
						}).error(function(/* data */){
							console.log('offset', offset, 'broke');
						});
					}
				});
				return allAlbums;
			},

			getPlaylists: function() {
				var allPlaylists = [];
				$http.get(baseUrl + '/me/playlists?limit=50', {
					headers: {
						'Authorization': 'Bearer ' + $cookies.token
					}
				}).then(function(data) {
					if (data.items) {
						data.items.forEach((ele) => {
							allPlaylists.push(ele);
						});
					}
					var songsLeft = data.data.total;
					for (var offset = 0; offset <= songsLeft; offset = offset + 50) {
						$http.get(baseUrl + '/me/playlists?offset=' + offset + '&limit=50', {
							headers: {
								'Authorization': 'Bearer ' + $cookies.token
							}
						}).success(function(data) {
							if (data.items) {
								data.items.forEach((ele) => {
									allPlaylists.push(ele);
								});
							}
						}).error(function(/* data */){
							console.log('offset', offset, 'broke');
						});
					}
				});
				return allPlaylists;
			},

			getTopArtists: function() {
				var allArtists = [];
				$http.get(baseUrl + '/me/top/artists?limit=50', {
					headers: {
						'Authorization': 'Bearer ' + $cookies.token
					}
				}).then(function(data) {
					if (data.items) {
						data.items.forEach((ele) => {
							allArtists.push(ele);
						});
					}
					var songsLeft = data.data.total;
					for (var offset = 0; offset <= songsLeft; offset = offset + 50) {
						$http.get(baseUrl + '/me/top/artists?offset=' + offset + '&limit=50', {
							headers: {
								'Authorization': 'Bearer ' + $cookies.token
							}
						}).success(function(data) {
							if (data.items) {
								data.items.forEach((ele) => {
									allArtists.push(ele);
								});
							}
						}).error(function(/* data */){
							console.log('offset', offset, 'broke');
						});
					}
				});
				return allArtists;
			},

			getTopTracks: function() {
				var allTracks = [];
				$http.get(baseUrl + '/me/top/tracks?limit=50', {
					headers: {
						'Authorization': 'Bearer ' + $cookies.token
					}
				}).then(function(data) {
					if (data.items) {
						data.items.forEach((ele) => {
							allTracks.push(ele);
						});
					}
					var songsLeft = data.data.total;
					for (var offset = 0; offset <= songsLeft; offset = offset + 50) {
						$http.get(baseUrl + '/me/top/tracks?offset=' + offset + '&limit=50', {
							headers: {
								'Authorization': 'Bearer ' + $cookies.token
							}
						}).success(function(data) {
							if (data.items) {
								data.items.forEach((ele) => {
									allTracks.push(ele);
								});
							}
						}).error(function(/* data */){
							console.log('offset', offset, 'broke');
						});
					}
				});
				return allTracks;
			}
		};
	});
})();