define(['app', 'backbone'], function( App, Backbone){
'use strict';

  return Backbone.Model.extend({
      defaults: {
           title: '',
           description: '',
           project: '',
           done : false,
           total_time: 0
      },
      url: '/api/tasks',
      initialize : function() {
          if (this.isNew()) this.set('created', Date.now());
      },
      toggle  : function() {
          return this.set('done', !this.get('done'));
      }
  });
});
