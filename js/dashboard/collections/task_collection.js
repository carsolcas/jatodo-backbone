define(['app', 'backbone', 'underscore',
        'dashboard/models/task_model'],
function( App, Backbone, _, Task){
'use strict';
    return Backbone.Collection.extend({
        model: Task,
        url : '/api/tasks/'
  });
});
