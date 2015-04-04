/*
 *
 * 
 */

var myControl = (function () {
    'use strict';

    var initModule;

    initModule = function($container) {
        myControl.roundChart.initModule($container);
    };

    return {
        initModule: initModule
    };

}());
