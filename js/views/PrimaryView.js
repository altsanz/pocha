app.views.PrimaryView = Backbone.View.extend({
	template: _.template($("#primaryViewTemplate").html()),
	initialize: function() {
		console.log('PrimaryView initialized');
	},
	render: function() {
		this.$el.html(this.template);
		return this;
	}
});