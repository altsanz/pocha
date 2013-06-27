app.routers.AppRouter = Backbone.Router.extend({
	routes: {
		"": "primary",
		"primary": "primary",
		"secondary": "secondary",
		"firstRoundBet": "firstRoundBet"
	},
	primary: function() {
		this.primaryView = new app.views.PrimaryView();

		this.changeView(this.primaryView);
	},
	secondary: function() {
		this.secondaryView = new app.views.SecondaryView({
			model: new app.models.PlayerCollection()
		});

		this.changeView(this.secondaryView);

	},
	firstRoundBet: function() {
		this.betRoundView = new app.views.BetRoundView({
			model: new app.models.PlayerCollection()
		});

		this.changeView(this.betRoundView);
	},
	changeView: function(view) {
		view.render();
		view.$el.attr('data-role', 'page');
		$("body").append(view.$el);
		$.mobile.changePage(view.$el, { changeHash:false });
	}
});