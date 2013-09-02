angular.module('chartDemo', ['ngHighcharts']).
    config(function() {

    });

function DemoCtrl($scope) {
    $scope.title = "Directive Demo";
    $scope.parseError = "";
    var chartData = {
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Firefox',   45.0],
                ['IE',       26.8],
                {
                    name: 'Chrome',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Safari',    8.5],
                ['Opera',     6.2],
                ['Others',   0.7]
            ]
        }]
    };

    $scope.chart1Json = angular.toJson(chartData, true);
    $scope.chartData1 = chartData;
    $scope.updateChart = function() {
        $scope.parseError = "";
        try {
            $scope.chartData1 = angular.fromJson($scope.chart1Json);
        } catch (e) {
            console.log(e.message);
            $scope.parseError = e.message;
        }
    }

}