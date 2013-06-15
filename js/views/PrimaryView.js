app.views.PrimaryView = Backbone.View.extend({
	tagName: 'article',
	initialize: function() {
		console.log('PrimaryView initialized');
	},
	render: function() {
		this.$el.html('PrimaryView content rendered');
	}
});