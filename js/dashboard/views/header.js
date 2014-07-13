'use strict';
define(['app', 'marionette', 'underscore',
        'text!dashboard/templates/dashboard-header-view.html'],
       function( App, Marionette, _, header_tmpl){

    return  Marionette.LayoutView.extend({
        template: _.template(header_tmpl),
    });

});
