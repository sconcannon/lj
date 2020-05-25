(function() {
        'use strict'
    // paper.js boilerplate follows- installing paper.js in the global scope
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    var tool = new Tool();

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 205);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello world';

    tool.onMouseDown = function(event) {
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
    
    paper.view.draw();

    // ...and end here
}())