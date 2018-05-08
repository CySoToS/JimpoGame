demo.state4 = function() {};
demo.state4.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#823f5c';
        console.log("Elare 4");
        addChangeStateEventListener();
    },
    update: function() {}
};