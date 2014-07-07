'use strict';
define(['text!dashboard/templates/dashboard-layout.html',
        'app', 'marionette',
        'underscore'], function(tmpl, TodoApp, Marionette, _){

    var Dashboard = TodoApp.module("Dashboard");
    Dashboard.startWithParent = false;

    Dashboard.addInitializer(function(options){
        options.region.show(new this.LayoutView());
    });

    Dashboard.LayoutView = Marionette.LayoutView.extend({
        template: _.template(tmpl),
        regions: {
            dsb_header: '#dashboard-header',
            dsb_tasks: '#dashboard-tasks',
            dsb_actives: '#dashboard-actives',
            dsb_dones: '#dashboard-dones',
            dsb_footer: '#dashboard-footer'
        }
    });

    Dashboard.views = {};
    return Dashboard;
});
