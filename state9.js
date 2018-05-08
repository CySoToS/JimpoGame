demo.state9 = function() {};
demo.state9.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#606060';
        console.log("Elare 9");
        addChangeStateEventListener();
    },
    update: function() {}
};