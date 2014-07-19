'use strict';
define(['text!dashboard/templates/dashboard-layout.html',
        'dashboard/views/footer',
        'dashboard/views/task_list',
        'dashboard/views/day_list',
        'dashboard/collections/task_collection',
        'app', 
        'marionette',
        'underscore'],
function(tmpl, Footer, TaskListView, DayListView, TaskCollection, App, Marionette, _){

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
            dsb_tasks: '#dashboard-tasks',
            dsb_dones: '#dashboard-dones',
            dsb_footer: '#dashboard-footer'
        },

        onShow:function(){
            Dashboard.controller.trigger('layout:show');
            this.footerView = new Footer();
            var taskList = new TaskCollection();

            this.taskListView = new TaskListView({collection:taskList});
            this.taskListDay = new DayListView();

            this.dsb_footer.show(this.footerView);
            this.dsb_tasks.show(this.taskListView );
            this.dsb_dones.show(this.taskListDay);
            taskList.fetch();
        }
    });

    return Dashboard;
});
