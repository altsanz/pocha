app.views.InitPlayerListItemView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($("#listItemViewTemplate").html()),
	render: function() {
		console.log('InitPlayerListItemView: ' + this.model.get('name'));
		
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
		this.$el.attr('data-icon', 'delete');
		return this;
	},
	destroy: function() {
		this.undelegateEvents();
		this.$el.removeData().unbind(); 
		this.remove();  
		Backbone.View.prototype.remove.call(this);

	}
});