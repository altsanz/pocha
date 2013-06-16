app.routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "primary",
		"primary": "primary",
		"secondary": "secondary"
	},
	initialize: function() {
	},
	primary: function() {
		this.primaryView = new app.views.PrimaryView();
		this.primaryView.$el.attr('data-role', 'page');
		$("body").append(this.primaryView.render().$el);
		$.mobile.changePage(this.primaryView.$el, {changeHash:false});

	},
	secondary: function() {
		this.secondaryView = new app.views.SecondaryView({
			model: new app.models.PlayerCollection()
		});
		this.secondaryView.$el.attr('data-role', 'page');
		this.secondaryView.render();
		console.log(this.secondaryView.el);
		$("body").append(this.secondaryView.$el);
		$.mobile.changePage(this.secondaryView.$el, {changeHash:false});

	}
});