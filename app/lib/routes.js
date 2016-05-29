Router.configure({
	layoutTemplate: 'MasterLayout',
	loadingTemplate: 'Loading',
	notFoundTemplate: 'NotFound',
	trackPageView: true
});

Router.route('/', {
	name: 'home',
	controller: 'HomeController',
	where: 'client',
	fastRender: true
});

Router.route('profile', {
	name: 'profile',
	controller: 'ProfileController',
	where: 'client',
	fastRender: true
});

Router.route('create_new_course', {
	name: 'createNewCourse',
	controller: 'CreateNewCourseController',
	where: 'client',
	fastRender: true
});

Router.route('course', {
	name: 'coursesList',
	controller: 'CoursesListController',
	where: 'client',
	fastRender: true
});

Router.route('course/:code', {
	name: 'course',
	controller: 'CourseController',
	where: 'client',
	fastRender: true
});

Router.route('course/:code/:lecture', {
	name: 'lectures',
	controller: 'LecturesController',
	where: 'client',
	fastRender: true
});

Router.route('/profile/settings', {
	name: 'settings',
	controller: 'SettingsController',
	where: 'client',
	fastRender: true
});

