app.models.Player = Backbone.Model.extend({
	defaults: function() {
		return {
			name: 'DefaultPlayer'
		}
	}
});

app.models.PlayerCollection = Backbone.Collection.extend({
	model: app.models.Player,
	localStorage: new Backbone.LocalStorage('players-backbone')
});


