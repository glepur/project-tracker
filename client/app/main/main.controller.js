'use strict';

angular.module('projectTrackerApp')
  .controller('MainCtrl', function ($scope, $http, User, uiCalendarConfig) {

    $scope.eventSources = [];

    $scope.uiConfig = {
      calendar:{
        height: 450,
        editable: true,
        defaultView: 'basicWeek',
        header: false,
        titleFormat: 'MMMM D YYYY',
        columnFormat: 'ddd',
        viewRender: function () {
            $scope.calendarView = uiCalendarConfig.calendars['calendar'].fullCalendar('getView');
        }
      }
    };

    $scope.calendarExecute = function (calendar, command) {
        uiCalendarConfig.calendars[calendar].fullCalendar(command);
    };

    // $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });

    // $scope.addThing = function() {
    //   if($scope.newThing === '') {
    //     return;
    //   }
    //   $http.post('/api/things', { name: $scope.newThing });
    //   $scope.newThing = '';
    // };

    // $scope.deleteThing = function(thing) {
    //   $http.delete('/api/things/' + thing._id);
    // };
  });
