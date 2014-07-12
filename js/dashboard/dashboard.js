'use strict';
define(['text!dashboard/templates/dashboard-layout.html',
        'dashboard/views/header',
        'dashboard/views/footer',
        'app', 'marionette',
        'underscore'], function(tmpl, Header, Footer, App, Marionette, _){

    var Dashboard = App.module("Dashboard");
    Dashboard.startWithParent = false;

    Dashboard.addInitializer(function(options){
        this.controller = new this.Controller(options);
        this.controller.show();
    });

    Dashboard.addFinalizer(function() {
        Dashboard.controller.destroy();
        delete Dashboard.controller;
    });


    Dashboard.Controller = Marionette.Controller.extend({
        initialize: function(options) {
            this.region = options.region;
            this.on('layout:show', this.onShow);
        },
        show: function(){
            this.layout = new Dashboard.LayoutView();
            this.region.show(this.layout);
        },
        getLayout: function(){
            var layout = new Dashboard.LayoutView();
            this.listenTo(layout, 'onShow', this.loadViews);
            return layout;
        },
        onShow:function(){
            console.log('layout shown');
        }
    });

    Dashboard.LayoutView = Marionette.LayoutView.extend({
        template: _.template(tmpl),
        regions: {
            dsb_header: '#dashboard-header',
            dsb_tasks: '#dashboard-tasks',
            dsb_actives: '#dashboard-actives',
            dsb_dones: '#dashboard-dones',
            dsb_footer: '#dashboard-footer'
        },
        onShow:function(){
            Dashboard.controller.trigger('layout:show');
            this.headerView = new Header();
            this.footerView = new Footer();

            this.dsb_header.show(this.headerView);
            this.dsb_footer.show(this.footerView);
        }
    });

    return Dashboard;
});
