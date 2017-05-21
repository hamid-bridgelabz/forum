angular.module('myApp').service('restService', function ($http) {
    //    function for httpRequest for all method
    this.httpRequest = function (url, method,config) {
        var httpObj = config || {};
        httpObj.method = method || "GET";
        httpObj.url=url|| "/";
        return $http(httpObj);
    };
});
