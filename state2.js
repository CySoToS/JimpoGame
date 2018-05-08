demo.state2 = function() {};
demo.state2.prototype = {
    preload: function() {},
    create: function() {
        game.stage.backgroundColor = '#3f8243';
        console.log("Elare 2");
        addChangeStateEventListener();
    },
    update: function() {}
};