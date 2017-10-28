var app = angular.module("jobsModule", ["ngRoute"]);

app.config(function ($routeProvider) {
    // userId = localStorage.getItem('userId')
    $routeProvider
        .when("/login", {
            template: '<login></login>',

        }).when("/logout", {
            template: '<logout></logout>',

        }).when("/myProfile", {
            template: `<my-profile></my-profile>`,

        }).when("/myJobs", {
            template: `<my-jobs></my-jobs>`,

        }).when("/publishJob", {
            template: `<publish-job ></publish-job>`,

        }).when("/register", {
            template: '<registration></registration>',

        }).when("/", {
            template: '<jobs></jobs>'

        }).when("/agent", {
            template: '<agent></agent>'

        

        }).when("/location", {
            template: '<location></location>',

        }).when("/myApplyJobs", {
            template: '<my-apply-jobs></my-apply-jobs>',

        })


// }).when("/map", {
//             template: '<map></map>',

}

);

