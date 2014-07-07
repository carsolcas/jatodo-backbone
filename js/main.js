'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        jqueryui: {
            deps: ['jquery'],
            exports: '$'
        },
        marionette : {
          deps : ['backbone'],
          exports : 'Backbone.Marionette'
        }
    },
    paths: {
        jquery: '../vendors/jquery',
        jqueryui: '../vendors/jquery.ui',
        underscore: '../vendors/underscore',
        backbone: '../vendors/backbone',
        marionette : '../vendors/backbone.marionette',
        text: '../vendors/text'
    }
});

require(['dashboard/dashboard', 'app', 'backbone', ],
function(dsb, app, Backbone){
    app.start();
    app.startSubApp('Dashboard');
    //new Router({
    //    controller : Controller
    //});
    Backbone.history.start();
});
