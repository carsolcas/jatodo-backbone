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

require(['app','backbone','routers/router','controllers/controller'],
function(app, Backbone, Router, Controller){
    app.start();
    new Router({
        controller : Controller
    });
    Backbone.history.start();
});
