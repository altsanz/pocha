$(function(){
var Player = Backbone.Model.extends({
	defaults : function() {
		return {
			name: 'DefaultPlayer'
		};
	}
});

var player = new Player({
	name: 'Default player'
});

var PlayerView = Backbone.View.extends({
	render : function(){
		var html = '<li>'+this.model.get('name')+'<img src="./img/minus-alt.png" alt="Eliminar jugador">';
		this.$el.html(html);
	}
});

var playerView = new PlayerView({
	model: player
});
});