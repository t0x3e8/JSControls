/// <reference path="myControl.shell.js" />
/// <reference path="myControl.js" />
/*
 * 
 * 
 */

myControl.roundChart = (function () {
    'use strict';

    var 
    configMap = {
        mainHtlm: String()
            + '<div class="roundChart-chart" />'
            + '<div class="roundChart-label  />',
    },
    stateMap = {
        $appendTarget: null,
    },
    jQueryMap = {
        $chart: null,
        $label: null,
    },
    initModule, configModule, setjQueryMap;

    setjQueryMap = function () {
        var $container = stateMap.$appendTarget;

        if ($container != null) {
            jQueryMap.$chart = $container.find('.roundChart-chart');
            jQueryMap.$label = $container.find('.roundChart-label');
        }

    };

    initModule = function ($appendTarget) {
        stateMap.$appendTarget.append(configMap.mainHtlm);
        stateMap.$appendTarget = $appendTarget;
        setjQueryMap();

        
    };

    configModule = function () {

    };

    return {
        initModule: initModule,
        configModule: configModule,
    };
}());