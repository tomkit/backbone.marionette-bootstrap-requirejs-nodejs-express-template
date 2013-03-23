define(['views/bodyview'],function(BodyView) {
    var Router = Backbone.Router.extend({
        routes : {
            '' : 'loadMain',
            '*actions' : 'loadMain',
            '/' : 'loadMain',
            '/*actions' : 'loadMain'
        },
        
        initialize : function() {
            console.log('router');
            _.bindAll(this, 'loadMain');
        },
        
        loadMain : function() {
            console.log('loadMain');
            new BodyView(); 
        }
    });
    
    return Router;
});