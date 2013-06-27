app.models.Player = Backbone.Model.extend({
	defaults: function() {
		return {
			name: 'DefaultPlayer',
			bet: 0
		}
	}
});

app.models.PlayerCollection = Backbone.Collection.extend({
	model: app.models.Player,
	localStorage: new Backbone.LocalStorage('players-backbone')
});


