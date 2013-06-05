$(function(){
	var Player = Backbone.Model.extend({
		defaults : function() {
			return {
				name: 'DefaultPlayer'
			};
		}
	});

	var PlayerList = Backbone.Collection.extend({
		model: Player,
		localStorage: new Backbone.LocalStorage('players-backbone')
	});

	var Players = new PlayerList;

	var player = new Player({
		name: 'Default player'
	});

	var PlayerView = Backbone.View.extend({
		template: _.template('<li><%= name %><img class="deletePlayer" src="./img/minus-alt.png" alt="Eliminar jugador"></li>'),
		events : {
			"click .deletePlayer" : "clear"
		},
		render : function(){
			var attributes = this.model.toJSON();
			this.$el.html(this.template(attributes));
		},
		clear : function() {
			this.model.destroy();
		}
	});

	var playerView = new PlayerView({
		model: player
	});

	
});