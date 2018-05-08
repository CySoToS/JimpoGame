demo.state8 = function() {};
demo.state8.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#cca28e';
        console.log("Elare 8");
        addChangeStateEventListener();
    },
    update: function() {}
};