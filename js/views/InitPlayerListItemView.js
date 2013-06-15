app.views.InitPlayerListItemView = Backbone.View.extend({
	tagName: 'li',
	render: function() {
		console.log('InitPlayerListItemView: ' + this.model.get('name'));

		this.$el.html(this.model.get('name'));
		return this;
	}
})