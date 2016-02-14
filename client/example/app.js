/* 
* @Author: Stefan Wirth
* @Date:   2016-02-14 00:57:42
* @Last Modified by:   Stefan Wirth
* @Last Modified time: 2016-02-14 01:01:50
*/

'use strict';
angular.module('app', [
    'ui.router',
    'eggWhites'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});