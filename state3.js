demo.state3 = function() {};
demo.state3.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#773f82';
        console.log("Elare 3");
        addChangeStateEventListener();
    },
    update: function() {}
};