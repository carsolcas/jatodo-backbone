'use strict';
define(['app', 'marionette', 'underscore',
        'text!dashboard/templates/dashboard-task-list.html',
        'dashboard/views/task_item'],
    function( App, Marionette, _, list_tmpl, ItemView){
       return Marionette.CompositeView.extend({
           template : _.template(list_tmpl),
           itemView : ItemView,
           itemViewContainer : '#task-list',
       });

});
