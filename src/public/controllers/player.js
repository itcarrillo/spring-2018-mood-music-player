(function() {

	var module = angular.module('smoodifyApp');

	module.controller('PlayerController', function($scope, PlayerAPI, SpotifyAPI, $http, $cookies, $rootScope) {
		/* created spotify web sdk playback code into a ng-click function called by clicking a temp button in main.html */
		$cookies.device = '';
		const token = $cookies.token;
		if ($rootScope.player === undefined) {
			$rootScope.player = new Spotify.Player({
				name: 'Smoodify',
				getOAuthToken: cb => { cb(token); }
			});

			$rootScope.player.connect().then(success => {
				if (success) {
					$rootScope.player.addListener('ready', ({ device_id }) => {
						$cookies.device = device_id;
						console.log('Ready with Device ID', device_id);
						/* Code to play from our device */
						PlayerAPI.switchToDevice();
						/* Initialize the player volume to our volume bar's starting point */
						PlayerAPI.setVolume(50);
					});
				}
			});
		}

		
		SpotifyAPI.getTracks().then(function(data) {
			console.log(data);
			$scope.songs = data;
		});


		SpotifyAPI.getAlbums().then(function(data) {
			console.log(data);
			$scope.albums = data;
		});

		SpotifyAPI.getTopArtists().then(function(data) {
			console.log(data);
			$scope.artists = data;
		});

		SpotifyAPI.getTopTracks().then(function(data) {
			console.log(data);
			$scope.top_tracks= data;
		});




		// Error handling
		// $scope.player.addListener('initialization_error', ({ message }) => { console.error(message); });
		// $scope.player.addListener('authentication_error', ({ message }) => { console.error(message); });
		// $scope.player.addListener('account_error', ({ message }) => { console.error(message); });
		// $scope.player.addListener('playback_error', ({ message }) => { console.error(message); });

		// Playback status updates
		// $scope.player.addListener('player_state_changed', state => { console.log(state.shuffle); });






		/* Play a song. Trigger this function when play button is pressed */
		$scope.play = function() {
			PlayerAPI.getPlayerState().then(function(data) {
				if (data.is_playing === true) {
					PlayerAPI.pause();
				} else {
					PlayerAPI.play().then(function(data) {
						PlayerAPI.getCurrentlyPlaying().then(function(data){
							console.log(data);
							$scope.imgSrc = data.item.album.images[0].url;
							$scope.songTitle = data.item.name;
							$scope.artistName = data.item.artists[0].name;
							$scope.albumName = data.item.album.name;
						});
					});
				}
			});
		};

		/* Go back to previous song. Trigger this function when previous button is clicked */
		$scope.previous = function() {      
			PlayerAPI.playPrevious().then(function() {
				PlayerAPI.delay().then(function() {
					PlayerAPI.getCurrentlyPlaying().then(function(data) {
						$scope.imgSrc = data.item.album.images[0].url;
						$scope.songTitle = data.item.name;
						$scope.artistName = data.item.artists[0].name;
						$scope.albumName = data.item.album.name;
					});
				});
			});

				
				// $scope.player.getCurrentState().then(state => {
				// 	if (!state) {
				// 		console.error('User is not playing music through the Web Playback SDK');
				// 		return;
				// 	}
                        
				// 	let {
				// 		current_track,
				// 		next_tracks: [next_track]
				// 	} = state.track_window;
                        
				// 	console.log('Currently Playing', current_track.name);
				// 	console.log('Playing Next', next_track);
				// 	/* scope variables to send back to html */
				// 	$scope.imgSrc = current_track.album.images[0].url;
				// 	/* Code to change the title <p> tag to the current song title. */
				// 	$scope.songTitle = current_track.name;
				// 	$scope.artistName = current_track.artists[0].name;
				// });
		};

		/* Skip song. Trigger this function when skip button is pressed */
		$scope.skip = function() {
			PlayerAPI.playNext().then(function() {
				PlayerAPI.delay().then(function() {
					PlayerAPI.getCurrentlyPlaying().then(function(data) {
						$scope.imgSrc = data.item.album.images[0].url;
						$scope.songTitle = data.item.name;
						$scope.artistName = data.item.artists[0].name;
						$scope.albumName = data.item.album.name;
					});
				});
			});
		};

        
		/* TODO Fix. Currently not working */
		$scope.mute = function() {
			if ($scope.vol !== 0) {
				PlayerAPI.setVolume($scope.vol);
			} else {
				PlayerAPI.setVolume(0);
			}
		};

		/* Make setVolume parameter to the value you get from volume bar */
		$scope.setVolume = function() {
			PlayerAPI.setVolume($scope.vol);
		};
        
		/* Getting data from Spotify */
		// TODO: Move to service
		var apiBaseUrl= 'https://api.spotify.com/v1/';
        
		/* Get current user's profile */
		var getUserProfile = function (){
			$http.get(apiBaseUrl + 'me/player', {
				headers: {
					'Authorization': 'Bearer ' + $cookies.token,
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				}
			}).success(function(data) {
				var userData = data;
			});
		};
            
		

		var allTracks = [];
		var allIds = [];
		var allFeatures = [];

		var getFeatures = function(ids, i){
			$http.get(apiBaseUrl + 'audio-features/?ids=' + ids, {
				headers: {
					'Authorization': 'Bearer ' + $cookies.token
				}
			}).success(function(data) {
				allFeatures.push.apply(allFeatures, data.audio_features);
			}).error(function(/* data */){
				console.log(i, 'broke');
			}); 
		};

		var getSongAnalysis = function() {
			for (var i = 0; i < allTracks.length; i++) {
				allIds.push(allTracks[i].id);
			}
			$http.get(apiBaseUrl + 'audio-features/?ids=' + allIds.slice(0,100).join(), {
				headers: {
					'Authorization': 'Bearer ' + $cookies.token
				}
			}).then(function(/* data */) {
				for (var i = 0; i < allIds.length; i += 100) {
					var end;
					if (i + 100 >= allIds.length) {
						end = allIds.length - i;
					} else {
						end = i + 100;
					}
					var ids = allIds.slice(i, end);
					getFeatures(ids.join(), i);
				}
			}).then(function() {
				// pair allTracks and allFeatures based on song id and create song object then save to db
			});
		};

		$scope.shuffle = function() {
			PlayerAPI.getPlayerState().then(function(data){
				PlayerAPI.toggleShuffle(data.data.shuffle_state);
			});  
		};

		$scope.playSong = function(song_uri) {
			PlayerAPI.playClickedSong();
		};
	});
})();