'use strict';
define(['app', 'marionette', 'underscore',
        'text!dashboard/templates/dashboard-task-list.html',
        'dashboard/views/task_item'],
    function( App, Marionette, _, list_tmpl, TaskItemView){
       return Marionette.CompositeView.extend({
           template : _.template(list_tmpl),
           childView : TaskItemView,
           childViewContainer : '#task-items-list',
       });

});
