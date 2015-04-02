describe('SearchController', function(){

	var ctrl, serv, loc, mockBackend;

	beforeEach(module('GitUp'));

	beforeEach(inject(function($controller, UserDataService, $httpBackend, $location){
		ctrl = $controller('SearchController');
		serv = UserDataService;
		mockBackend = $httpBackend;
		loc = $location;

		mockBackend.expectGET('https://api.github.com/users/undefined')
		.respond(404, {statusText: 'Not Found'});

		spyOn(serv, 'loadUserProfile').and.callThrough();
		spyOn(ctrl, 'getUserData').and.callThrough();
		spyOn(ctrl, 'getUserRepo');
		spyOn(ctrl, 'getUserFollowers');
		spyOn(ctrl, 'getUserFollowing').and.callThrough();
		// At this point, a server request will have been made
	}));

	it('should expect test to be true', function(){
		expect(ctrl.yes).toBeTruthy();
	});

	it('should call other functions', function(){
		ctrl.getUserData();
		expect(ctrl.getUserData).toHaveBeenCalled();
		expect(ctrl.getUserRepo).toHaveBeenCalled();
		expect(ctrl.getUserFollowers).toHaveBeenCalled();
		expect(ctrl.getUserFollowing).toHaveBeenCalled();
		//expect(serv.loadUserProfile).toHaveBeenCalled();
	});

	it('should expect user profile be loaded', function(){
		ctrl.getUserFollowing();
		expect(serv.loadUserProfile).toHaveBeenCalled();
	});

	it('should handle error while making requests', function(){
		expect(ctrl.errorMsg).toBeNull();
		ctrl.getUserData();
		mockBackend.flush();
		expect(ctrl.errorMsg).toEqual('Not Found');
	});

	it('should load the profile view', function(){
		serv.loadUserProfile();
		expect(loc.path()).toEqual('/search');
	});

	it('should load 404 error page', function(){
		serv.loadErrorPage();
		expect(loc.path()).toEqual('/search/404');
	});

	it('should expect load home page', function(){
		serv.loadHomePage();
		expect(loc.path()).toEqual('/');
	});

	/*afterEach(function() {
		// Ensure that all expects set on the $httpBackend // were actually called
		mockBackend.verifyNoOutstandingExpectation();
		// Ensure that all requests to the server // have actually responded (using flush())
		mockBackend.verifyNoOutstandingRequest();
	});*/


});