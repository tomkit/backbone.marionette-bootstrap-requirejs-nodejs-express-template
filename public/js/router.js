define(function() {
    var Router = Backbone.Router.extend({
        routes : {
            '' : 'loadMain',
            '*actions' : 'loadMain',
            '/' : 'loadMain',
            '/*actions' : 'loadMain'
        },
        
        initialize : function() {
            console.log('initialize');
            _.bindAll(this, 'loadMain');
        },
        
        loadMain : function() {
            console.log('loadMain');
        }
    });
    
    return Router;
});