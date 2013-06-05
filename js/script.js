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

	/* The application. */

	var AppView = Backbone.View.extend({
		el: $('#initPlayers'),
		events: {
			"keypress #new-player" : "createOnEnter"
		},
		initialize : function() {
			this.input = this.$('#new-player');

			this.listenTo(Players, 'add', this.addOne);
			this.listenTo(Players, 'reset', this.addAll);
			this.listenTo(Players, 'all', this.render);

			Players.fetch();
		},
		addOne : function(player) {
			var view = new PlayerView({model: player});
			view.render();
			this.$("#listPlayers").append(view.el);
		},
		addAll: function() {
			Players.each(this.addOne, this);
		},
		createOnEnter : function(e) {
			if (e.keyCode != 13) return;	// Detect if not enter was pressed
			if(!this.input.val()) return;	// Detect if input value is empty

			Players.create({name: this.input.val()});
			this.input.val('');
		}
	});

	var App = new AppView;

});