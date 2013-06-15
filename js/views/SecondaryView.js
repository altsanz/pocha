app.views.InitPlayersListView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function() {
		console.log('SecondaryView initialized');
    this.listenTo(this.model, 'add', this.addOne);
	},
	render: function() {
		this.$el.html('<li>SecondaryView content rendered.</li>');
		return this;
	},
	addOne: function(player) {
		console.log('Added one model into playersCollection');
		//this.render();

		console.log('InitPlayersListView - Addone: ' + player.get('name'));
		// We create a temporal view, just for rendering this model.
		var view = new app.views.InitPlayerListItemView({
			model: player
		});
		this.$el.append(view.render().$el);
	},
	addAll: function() {
		this.model.each(this.addOne, this);
	}
});

app.views.SecondaryView = Backbone.View.extend({
	tagName: 'div',
	events: {
		"keypress #new-player" : "createOnEnter"
	},
	initialize: function() {
		this.initPlayersListView = new app.views.InitPlayersListView({
			model: this.model
		});
	},
	render: function() {
		this.$el.html(this.initPlayersListView.render().$el.html());
		this.$el.append('<input id="new-player" type="text">');
	},
	createOnEnter : function(e) {
			this.input = $('#new-player');
			if (e.keyCode != 13) return;	// Detect if not enter was pressed
			if(!this.input.val()) return;	// Detect if input value is empty

			this.model.create({name: this.input.val()});	// Creates a new PlayerModel instance with input's content.
			this.input.val('');
			this.$el.html(this.initPlayersListView.$el.html());
			this.$el.append('<input id="new-player" type="text">');

	}
});


