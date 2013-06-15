var app = {
    views: {},
    routers: {},
    models: {}
};

$(document).on("ready", function () {
	app.router = new app.routers.AppRouter();
	Backbone.history.start();
	console.log('AppRouter launched');
});

