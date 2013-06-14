app.routers.AppRouter = Backbone.Router.extend({
	initialize : function(el) {
		this.el = el;
		console.log('HOla');
	},
	routers : {
		"" : "home",
		"home" : "home",
		"initPlayers" : "initPlayers"
	},
	home : function() {
		// Only creates a unique instance of HomeView.
		if (!this.homeView) {
			this.homeView = new app.views.HomeView();
			this.homeView.render();
		}
		console.log('Rendering homeView.');
		console.log(this.homeView.el);
		this.$el.html(this.homeView.el);	// Fills main div with homeView content
	},
	initPlayers : function() {

		console.log('Rendering initPlayers');
		// Each time overwrites initPlayersView with a new instance.
		this.initPlayersView = new app.views.initPlayersView({
			model: new app.models.PlayerCollection()
		});
		

		this.initPlayersView.render();
		
		console.log(this.initPlayersView.el);
		this.$el.html(this.initPlayersView.el);
	}
});