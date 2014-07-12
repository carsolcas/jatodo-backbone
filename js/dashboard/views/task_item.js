'use strict';
define(['app', 'marionette', 'underscore',
        'text!dashboard/templates/dashboard-task-item.html'], 
    function( App, Marionette, _, item_tmpl){
       return Marionette.ItemView.extend({
            template: _.template(item_tmpl),
            tagName: 'div'
          });

});
