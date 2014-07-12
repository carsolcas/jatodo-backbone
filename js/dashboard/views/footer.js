'use strict';
define(['app', 'marionette', 'underscore',
        'text!dashboard/templates/dashboard-footer-view.html'], 
       function( App, Marionette, _, footer_tmpl){
    
    return  Marionette.LayoutView.extend({
        template: _.template(footer_tmpl),
    });

});
