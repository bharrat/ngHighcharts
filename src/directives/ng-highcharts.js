'use strict';

angular.module('ngHighcharts',[])
    .directive('highchart', function () {
        //any default options can be configured here
        var defaultChartOptions = {

        };
        var buildChartOptions = function(userOptions, element, attrs) {
            var chartOpts = angular.extend({}, defaultChartOptions);
            if (typeof chartOpts.chart == "undefined") {
                chartOpts.chart = {};
            }
            if (attrs.height && !isNaN(attrs.height)) {
                chartOpts.chart.height = attrs.height;
            }
            if (attrs.width && !isNaN(attrs.width)) {
                chartOpts.chart.width = attrs.width;
            }
            chartOpts = angular.extend(chartOpts, userOptions);
            chartOpts.chart['renderTo'] = element[0];
            return chartOpts;
        };
        return {
            restrict: 'EA',
            template: '<div class="high-chart"></div>',
            scope: {
                chartOptions: "=options"
            },
            replace: true,
            link: function (scope, element, attrs) {

                scope.$watch('chartOptions', function(newVal) {
                    var chart = new Highcharts.Chart(buildChartOptions(newVal, element, attrs));
                });
            }
        };
    });