$(function(){
	var PlayerModel = Backbone.Model.extend({
		defaults : function() {
			return {
				name: 'DefaultPlayer'
			};
		}
	});

	var PlayerCollection = Backbone.Collection.extend({
		model: PlayerModel,
		localStorage: new Backbone.LocalStorage('players-backbone')
	});

	var playersCollection = new PlayerCollection;
	
	var player = new PlayerModel({
		name: 'Default player'
	});

	var PlayerView = Backbone.View.extend({
		el: $('#listPlayers'),
		template: _.template('<li><%= name %><img class="deletePlayer" src="./img/minus-alt.png" alt="Eliminar jugador"></li>'),
		events : {
			"click .deletePlayer" : "clear"
		},
		render : function(){
			this.el = $('#listPlayers');
			var attributes = this.model.toJSON();
			this.el.html(this.el.html() + this.template(attributes));

		},
		clear : function() {
			this.model.destroy();
		}
	});

	var playerView = new PlayerView({
		model: player
	});

	/* Vista inicial */
	var HomeView = Backbone.View.extend({
		el: $('#mainApp'),
		render: function() {
			this.$el.html('Home Home Home Home Home Home');
			return this;
		}
	});

	/* Vista para inicializar jugadores */
	var InitPlayersView = Backbone.View.extend({
		el: $('#mainApp'),
		events: {
			"keypress #new-player" : "createOnEnter"
		},
		initialize : function() {
			this.$el.html('Inserta jugadores:<div id="initPlayers"><ul id="listPlayers"></ul><input id="new-player" type="text"><img src="./img/plus-alt.png" alt="Añadir jugador"></div>');
			this.input = this.$('#new-player');

			this.listenTo(playersCollection, 'add', this.addOne);
			this.listenTo(playersCollection, 'reset', this.addAll);
			this.listenTo(playersCollection, 'remove', this.addAll);
			this.listenTo(playersCollection, 'all', this.render);

			playersCollection.fetch();
		},
		/* addOnTriggered when createOnEnter add's a new player to the collection */
		addOne : function(player) {
			var view = new PlayerView({model: player});
			view.render();
		},
		addAll: function() {
			playersCollection.each(this.addOne, this);
		},
		createOnEnter : function(e) {
			if (e.keyCode != 13) return;	// Detect if not enter was pressed
			if(!this.input.val()) return;	// Detect if input value is empty

			playersCollection.create({name: this.input.val()});	// Creates a new PlayerModel instance with input's content.
			this.input.val('');
		}
	});

	var ApplicationRouter = Backbone.Router.extend({

		initialize: function(el) {
			this.el = el;
		},

		routes: {
			"": "home",
			"home": "home",
			"initPlayers": "initPlayers"	
		},

		home: function() {

			if (!this.homeView) {
				this.homeView = new HomeView();
			}
			this.homeView.render();
		},

		initPlayers: function() {
			this.initPlayersView = new InitPlayersView();
			this.initPlayers.fetch();
		}
	});

var router = new ApplicationRouter($('#mainApp'));
Backbone.history.start();

});

