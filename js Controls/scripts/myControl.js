/*
 *
 * 
 */
/*
jslint    browser: true, devel: true, continue: true, newcap: true,
            nomen: true, plusplus: true, regexp: true, sloppy: true,
            vars: false, white: true, indent: 2, maxerr: 50
*/

/*global $
 */

var myControl = (function () {
    'use strict';

    var initModule;

    initModule = function ($container) {
        myControl.roundChart.initModule($container);
    };

    return {
        initModule: initModule
    };

}());
