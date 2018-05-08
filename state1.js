demo.state1 = function() {};
demo.state1.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#D00DDD';
        console.log("Elare 1");
        addChangeStateEventListener();
    },
    update: function() {}
};