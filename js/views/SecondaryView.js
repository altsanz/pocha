/* Se encarga de almacenar toda la vista del segundo menú, donde se añaden jugadores */
app.views.SecondaryView = Backbone.View.extend({
	template: _.template($("#secondaryViewTemplate").html()),
	events: {
		"keypress #new-player" : "createOnEnter",
	},
	initialize: function() {
		this.listenTo(this.model, 'add', this.addOne)
	},
	render: function() {
		this.$el.html(this.template);
	},
	addOne: function(player) {
		console.log('SecondaryView.AddOne(): Detected ' +  player.get('name') + ' addition into playersCollection');

		// We create a temporal view, just for rendering this model.
		var view = new app.views.InitPlayerListItemView({
			model: player
		});
		$("#initPlayersList").append(view.render().$el);
		
		$("#initPlayersList").listview('refresh');

	},
	createOnEnter : function(e) {
		this.input = $('#new-player');
		if (e.keyCode != 13) return;	// Detect if not enter was pressed
		if(!this.input.val()) return;	// Detect if input value is empty

		this.model.create({name: this.input.val()});	// Creates a new PlayerModel instance with input's content.
		this.input.val('');

		// Needed to update list appearance, apply styles, etc.
	}
});


