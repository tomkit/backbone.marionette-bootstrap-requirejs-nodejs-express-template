requirejs.config({
    baseUrl : 'js',
    paths : {
        views : 'views'
    }
});

requirejs(['router'], function(Router) {
    var Experimental = {};

    Experimental.app = new Backbone.Marionette.Application();

    // Routes
    Experimental.app.addInitializer(function(options) {
        Experimental.router = new Router();
        Backbone.history.start();
        console.log('routes initialized');
    });

    var options = {};
    Experimental.app.start(options);
});

