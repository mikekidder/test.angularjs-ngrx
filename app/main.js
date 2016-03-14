System.register(['angular2/platform/browser', '@ngrx/store', './app.component', './counter'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, store_1, app_component_1, counter_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (store_1_1) {
                store_1 = store_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (counter_1_1) {
                counter_1 = counter_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [store_1.provideStore({ counter: counter_1.counter }, { counter: 0 })]);
        }
    }
});
//# sourceMappingURL=main.js.map