'use strict';

define( ["marionette", 'dashboard/dashboard'], function (Marionette) {
     // set up the app instance
    var TodoApp = new Marionette.Application();

    TodoApp.startSubApp = function(subApp) {
        var currentApp = TodoApp.module(subApp);

        if (TodoApp.currentApp === currentApp) {
         return;
        }

        if (TodoApp.currentApp) {
         TodoApp.currentApp.stop();
        }

        TodoApp.currentApp = currentApp;

        currentApp.start({region: TodoApp.main});
    };


     TodoApp.addRegions({
            main: "#main-content"
        });
    
     // export the app from this module
     return TodoApp;
});
