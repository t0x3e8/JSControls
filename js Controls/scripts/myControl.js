/*global alert */

var myControl =(function () {
    'use strict';

    var configMap = {
            chartType: 'circle',
            data: {}
        },
        settableMap = {
            chartType: true,
            data: true
        },
        initModule,
        configModule;

    initModule = function ($container) {
        var inputMap = configMap.data;

        if (configMap.chartType === 'circle') {
            myControl.roundChart.configModule(inputMap);
            myControl.roundChart.initModule($container);
        }
        else if (configMap.chartType === 'stackBar') {
            myControl.stackBarChart.configModule(inputMap);
            myControl.stackBarChart.initModule($container);
        }
        else {
            alert('no chart type specified');
        }
    };

    configModule = function (inputMap) {
        myControl.utils.setConfigMap({
            inputMap: inputMap,
            settableMap: settableMap,
            configMap: configMap
        });
    };

    return {
        initModule: initModule,
        configModule: configModule
    };
}());
