var DemoApp = angular.module('DemoApp', ['dx']);

DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.polarChartOptions = {
        dataSource: dataSource,
        useSpiderWeb: true,
        series: [{valueField: "apples", name: "Apples" },
                 { valueField: "grapes", name: "Grapes" },
                 { valueField: "lemons", name: "Lemons" },
                 { valueField: "oranges", name: "Oranges" }],
        commonSeriesSettings: {        
            type: "line"
        },
        "export": {
            enabled: true
        },
        title: "Fruit Production in 2010 (Millions of Tons)",
        tooltip: {
            enabled: true
        }
    };
});