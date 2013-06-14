app.views.InitPlayersView = Backbone.View.extend({
	initialize : function() {
		this.el.empty();
		this.el.append('Inserta jugadores:<div id="initPlayers"><ul id="listPlayers"></ul><input id="new-player" type="text"><img src="./img/plus-alt.png" alt="Añadir jugador"></div>');
		this.input = this.$('#new-player');
		
	},
	events : {
		"keypress #new-player" : "createOnEnter"
	},
	createOnEnter : function(e) {
		if (e.keyCode != 13) return;	// Detect if not enter was pressed
		if(!this.input.val()) return;	// Detect if input value is empty

		this.model.create({name: this.input.val()});	// Creates a new PlayerModel instance with input's content.
		this.input.val('');
	},
	render : function() {
		this.el.empty();
		this.el.append('Inserta jugadores:<div id="initPlayers"><ul id="listPlayers">');
		this.model.each(function(model){
			console.log(model);		// It doesn't add the li element, yet.
		});
		this.el.append('</ul><input id="new-player" type="text"><img src="./img/plus-alt.png" alt="Añadir jugador"></div>');

	}

});