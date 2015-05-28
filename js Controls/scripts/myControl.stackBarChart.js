/// <reference path="myControl.js" />
/*
 * 
 * 
 */

/*global $, myControl*/

myControl.stackBarChart = (function () {
    'use strict';

    var configMap = {
        mainHtml: String()
            + '<canvas class="stackBarChart-canvas"></canvas>'
            + '<div class="stackBarChart-label"  />',
        value: 0,
        label: '',
        primaryColor: '#ff0000',
        secondaryColor: '#880000',
        barWidthRatio: 0.2
    },
        settableMap = {
            value: true,
            label: true,
            primaryColor: true,
            secondaryColor: true,
            barWidthRatio: true
        },
        stateMap = {
            $appendTarget: null
        },
        jQueryMap = {
            $canvas: null,
            $label: null
        },
        initModule,
        configModule,
        setjQueryMap,
        drawControl;

    setjQueryMap = function () {
        var $container = stateMap.$appendTarget;

        if ($container !== null) {
            jQueryMap.$canvas = $container.find('.stackBarChart-canvas');
            jQueryMap.$label = $container.find('.stackBarChart-label');
        }
    };

    initModule = function ($appendTarget) {
        $appendTarget.append(configMap.mainHtml);
        stateMap.$appendTarget = $appendTarget;
        setjQueryMap();

        drawControl();
    };

    drawControl = function () {
        var value = configMap.value,
            label = configMap.label,
            canvas = jQueryMap.$canvas[0],
            $label = jQueryMap.$label,
            ctx,
            canvasWidth,
            canvasHeight,
            valueColor,
            emptyColor,
            barWidth,
            x,
            start = 0,
            progress,
            stop,
            textWidth;

        if (canvas.getContext) {
            valueColor = configMap.primaryColor;
            emptyColor = configMap.secondaryColor;

            canvasWidth = parseInt($(jQueryMap.$canvas).css('width'), 10);
            canvasHeight = parseInt($(jQueryMap.$canvas).css('height'), 10);

            ctx = canvas.getContext('2d');
            canvas.setAttribute('width', canvasWidth);
            canvas.setAttribute('height', canvasHeight);
            barWidth = canvasWidth * configMap.barWidthRatio;
            x = (canvasWidth - barWidth) / 2;
            progress = (canvasHeight / 100) * value;
            stop = (canvasHeight / 100) * (100 - value);

            // value circle part
            ctx.fillStyle = valueColor;
            ctx.fillRect(x, canvasHeight, barWidth, -progress);
            ctx.fillStyle = emptyColor;
            ctx.fillRect(x, 0, barWidth, stop);

            ctx.font = 'bold ' + canvasWidth * 0.17 + 'px arial';
            ctx.fillStyle = valueColor;
            textWidth = ctx.measureText(value + '%').width;
            ctx.textBaseline = 'middle';
            ctx.fillText(value + '%', canvasWidth - textWidth, canvasHeight / 2);
        }
        $($label).text(label);
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