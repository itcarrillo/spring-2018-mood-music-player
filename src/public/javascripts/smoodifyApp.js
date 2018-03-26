var app = angular.module('smoodifyApp', ['ngRoute', 'ngResource', 'angularCSS', 'ngCookies']).run(function($rootScope, $http, $cookies, $location) {
	$rootScope.$on('$locationChangeStart', function (event, next, current) {
		// var for user stored in session cookie
		let user = '';
		if (typeof $cookies['user'] == 'string' && $cookies['user'] != '') {
			user = JSON.parse($cookies['user'])
		}

		console.log('grabbing cookie');
		// no logged in user, we should be going to #login
		if (user == '') {
			$rootScope.authenticated = false;
			$rootScope.current_user = '';
			// if (next.includes('register')) {
			// 	// if link is to register page, allow
			// 	console.log('not auth\'d');
			// }
			// else {  // otherwise redirect to login
			// 	console.log('not auth\'d');
			// }	
			console.log('not auth\'d');
		}
		// logged in session exists, set current user as authenticated
		else {
			console.log('yes auth\'d');
			$rootScope.authenticated = true;
			$rootScope.current_user = user;
		}
	});
	
	$rootScope.signout = function(){
		console.log('got into signout');
		if (typeof($cookies['user']) == 'string') {
			$http.get('auth/signout');
			$rootScope.authenticated = false;
			$rootScope.current_user = '';
			$cookies['user'] = '' //, { path:'/', domain:'localhost'} this object may be necessary in some situations
			console.log('removed cookie');
		}
	};
});

app.config(function($routeProvider){
	$routeProvider
		// the landing display
		.when('/', {
			css: ['../stylesheets/login.css', '../stylesheets/base.css'],
			templateUrl: 'landing.html',
			controller: 'mainController'
		})
		// the login display
		.when('/login', {
			css: {
				href: '../stylesheets/login.css',
				preload: true
			},
			templateUrl: 'login.html',
			controller: 'authController'
		})
		// the signup display
		.when('/register', {
			css: {
				href: '../stylesheets/login.css',
				preload: true
			},
			templateUrl: 'register.html',
			controller: 'authController',
		})
		.when('/saved', {
			css: {
				href: '../stylesheets/base.css',
				preload: true
			},
			templateUrl: 'saved_music.html',
			controller: 'browseController'
		}).when('/spotify_login', {
			css: {
				/* Code to get to Spotify Login */
			},
			templateUrl: 'main.html',
			controller: 'spotifyController'
		})
		.when('/account', {
			css: ['../stylesheets/login.css', '../stylesheets/base.css'],
			templateUrl: 'account.html',
			controller: 'accountController'
		});
	$locationProvider.html5Mode({requireBase: false});
});

app.controller('mainController', function($scope, $rootScope, $window){
	
});

// Currently separated browse page into browseController. Merge with mainController later 
app.controller('browseController', function($scope, $rootScope, $window){
	/* created spotify web sdk playback code into a ng-click function called by clicking a temp button in main.html */
	/* TODO: Going to need to make token dynamic in that it obtains the current users token. Code once CORS Issue is solved.*/
	const token = $cookies.token;
	const player = new Spotify.Player({
		name: 'Smoodify',
		getOAuthToken: cb => { cb(token); }
	});

	// Error handling
	player.addListener('initialization_error', ({ message }) => { console.error(message); });
	player.addListener('authentication_error', ({ message }) => { console.error(message); });
	player.addListener('account_error', ({ message }) => { console.error(message); });
	player.addListener('playback_error', ({ message }) => { console.error(message); });

	// Playback status updates
	player.addListener('player_state_changed', state => { console.log(state); });

	// Ready
	player.addListener('ready', ({ device_id }) => {
		console.log('Ready with Device ID', device_id);
	});

	// Connect to the player!
	player.connect().then(success => {
		if (success) {
			console.log('The Web Playback SDK successfully connected to Spotify!');
		}
	});

	/* Play a song. Trigger this function when play button is pressed */
	$scope.play = function() {
		player.togglePlay().then(() => {
			console.log('Toggle Button Fired');
		});


		/* code to get the metadata of the song currently playing */
		player.getCurrentState().then(state => {
			if (!state) {
				console.error('User is not playing music through the Web Playback SDK');
				return;
			}
				
			let {
				current_track,
				next_tracks: [next_track]
			} = state.track_window;
			
			console.log('Currently Playing', current_track.name);
			console.log('Playing Next', next_track);

			/* scope variables to send back to html */
			$scope.imgSrc = current_track.album.images[0].url;
			/* Code to change the title <p> tag to the current song title. */
			$scope.songTitle = current_track.name;
			$scope.artistName = current_track.artists[0].name;
		});


	};

	/* Go back to previous song. Trigger this function when previous button is clicked */
	$scope.previous = function() {
		player.previousTrack().then(() => {
			console.log('Previous');
		});
	};

	/* Skip song. Trigger this function when skip button is pressed */
	$scope.skip = function() {
		player.nextTrack().then(() => {
			console.log('Skip');
		});
	};
});

// Controller for spotify login. Currently giving a CORS Error 
app.controller('spotifyController', function($scope, $http, $location, $window) {
	$scope.scopes = 'user-read-private user-read-email';
	/* Currently giving a CORS issue because Spotify doesn't allow Cross Domain Access */
	/* TODO: Create a proxy server to be able to Cross Domain Access */
	$http.get('https://accounts.spotify.com/authorize' +
      '?response_type=token' +
      '&client_id=' + 'dcddb8d13b2f4019a1dadb4b4c070661' +
      ($scope.scopes ? '&scope=' + encodeURIComponent($scope.scopes) : '') +
			'&redirect_uri=' + encodeURIComponent('http://localhost:3000'))
			.then(function(response) {
				$scope.my_data = response.data;
	});
});

// TODO
app.controller('accountController', function(songService, $scope, $rootScope){
});

// Controller used for loging in and registering using Passport
app.controller('authController', function($scope, $http, $rootScope, $location, $cookies){
  $scope.user = {username: '', password: ''};
  $scope.error_message = '';
  $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success'){
      	$cookies['user'] = JSON.stringify(data.user);
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };

  $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success'){
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/');
      }
      else{
        $scope.error_message = data.message;
      }
    });
  };
});