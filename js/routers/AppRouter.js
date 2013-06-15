app.routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "primary",
		"primary": "primary",
		"secondary": "secondary"
	},
	initialize: function() {
		this.el = $('#mainApp');
	},
	primary: function() {
		this.primaryView = new app.views.PrimaryView();
		this.primaryView.render();
		console.log(this.primaryView.el);
		this.el.html(this.primaryView.el);
	},
	secondary: function() {
		this.secondaryView = new app.views.SecondaryView({
			model: new app.models.PlayerCollection()
		});
		this.secondaryView.render();
		console.log(this.secondaryView.el);
		this.el.html(this.secondaryView.el);
	}
});