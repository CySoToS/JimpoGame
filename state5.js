demo.state5 = function() {};
demo.state5.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#305959';
        console.log("Elare 5");
        addChangeStateEventListener();
    },
    update: function() {}
};