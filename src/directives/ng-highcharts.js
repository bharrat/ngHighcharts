'use strict';

angular.module('ngHighcharts',[])
    .directive('highchart', function () {
        var defaultChartOptions = {

        };
        return {
            restrict: 'EA',
            template: '<div class="high-chart"></div>',
            scope: {
                chartOptions: "=options"
            },
            replace: true,
            link: function (scope, element) {
                scope.$watch('chartOptions', function() {
                    var opts = angular.extend({}, defaultChartOptions, scope.chartOptions);
                    if (typeof opts.chart == "undefined") {
                        opts.chart = {};
                    }
                    opts.chart['renderTo'] = element[0];
                    var chart = new Highcharts.Chart(opts);
                });
            }
        };
    });