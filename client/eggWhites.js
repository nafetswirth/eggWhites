// eggWhites.js
// 
// Copyright (c) 2016 Stefan Wirth
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

(function() {
    'use strict';
    angular.module('eggWhites',[])
    .constant('KHALED_IPSUM_API', 'https://eggwhites.herokuapp.com/khaledIpsum')
    .directive('khaledIpsum', ['khaledService', function(khaledService) {
        return {
            restrict: 'E',
            link: function(scope, element, attributes) {
                var numberOfEggWhites = attributes.paragraphs || 5;
        
                khaledService.paveTheRoadToSuccessWith(numberOfEggWhites)
                .then(function(eggWhites) {
                    eggWhites.forEach(function(eggWhite) {
                        var p = angular.element('<p class="khaledIpsum"></p>');
                        p.html(eggWhite);
                        element.append(p);
                    });
                });
            }
        };
    }])
    .factory('khaledService', ['$http', '$q', 'KHALED_IPSUM_API', function($http, $q, KHALED_IPSUM_API) {  
        var service = {
            paveTheRoadToSuccessWith: paveTheRoadToSuccessWith
        };
      
        return service;
      
        function paveTheRoadToSuccessWith(numberOfEggWhites) {
            return $http.get(KHALED_IPSUM_API, {
                params: {
                    paragraphs: numberOfEggWhites
                }
            })
            .then(function(khaledIpsum) {
                var roadToSuccess = khaledIpsum.data.roadToSuccess;
                var paragraphs = roadToSuccess.split('|');
                return $q.when(paragraphs);
            });
        }
    }]);
})();