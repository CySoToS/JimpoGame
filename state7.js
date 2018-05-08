demo.state7 = function() {};
demo.state7.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#c9cc8e';
        console.log("Elare 7");
        addChangeStateEventListener();
    },
    update: function() {}
};