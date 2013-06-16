app.views.InitPlayersListView = Backbone.View.extend({
	tagName: 'ul',
	initialize: function() {
		console.log('SecondaryView initialized');
		this.listenTo(this.model, 'add', this.addOne);
	},
	render: function() {
		this.$el.append('<li>SecondaryView content rendered.</li>');
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
	template: _.template($("#secondaryView").html()),
	events: {
		"keypress #new-player" : "createOnEnter"
	},
	initialize: function() {
		this.initPlayersListView = new app.views.InitPlayersListView({
			model: this.model,
		});
	},
	render: function() {
		this.$el.html(this.template);
		console.log(this.$el);
		//this.initPlayersListView.render();
	},
	createOnEnter : function(e) {
		this.input = $('#new-player');
		if (e.keyCode != 13) return;	// Detect if not enter was pressed
		if(!this.input.val()) return;	// Detect if input value is empty

		this.model.create({name: this.input.val()});	// Creates a new PlayerModel instance with input's content.
		this.input.val('');

		// We add the content of initPlayersListView element, because when model added, listener triggers and autorenders new element into list.
		$("#initPlayersList").html(this.initPlayersListView.$el.html());
		
		// Needed to update list appearance, apply styles, etc.
		$('#initPlayersList').listview('refresh');	

			

		}
	});


