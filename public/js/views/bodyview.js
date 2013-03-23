define(['views/baseview'], function(BaseView) {
   var BodyView = BaseView.extend({
       initialize : function() {
           console.log('bodyview');
       }
   });
   
   return BodyView;
});