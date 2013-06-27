app.views.BetRoundView = Backbone.View.extend({
	template: _.template($("#betRoundViewTemplate").html()),
	render: function() {
		this.$el.html(this.template);
	}
});