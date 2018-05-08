demo.state6 = function() {};
demo.state6.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#575930';
        console.log("Elare 6");
        addChangeStateEventListener();
    },
    update: function() {}
};