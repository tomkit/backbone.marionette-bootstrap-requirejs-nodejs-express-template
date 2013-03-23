define([ 'models/cell' ], function(Cell) {
    var Cells = Backbone.Collection.extend({

        model : Cell,

        /**
         * Constructor
         */
        initialize : function() {
            
        }

    });

    return Cells;
});
