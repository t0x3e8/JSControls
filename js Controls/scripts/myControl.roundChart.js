﻿/// <reference path="myControl.js" />
/*
 * 
 * 
 */

/*global $, myControl*/

myControl.roundChart = (function () {
    'use strict';

    var configMap = {
        mainHtml: String()
            + '<canvas class="roundChart-canvas"></canvas>'
            + '<div class="roundChart-label"  />',
        value: 0,
        label: '',
        primaryColor: '#ff0000',
        secondaryColor: '#880000',
        circleBorderRatio: 0.2
    },
        settableMap = {
            value: true,
            label: true,
            primaryColor: true,
            secondaryColor: true,
            circleBorderRatio: true
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
            jQueryMap.$canvas = $container.find('.roundChart-canvas');
            jQueryMap.$label = $container.find('.roundChart-label');
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
            x, y, r,
            canvasWidth,
            canvasHeight,
            circleBorder,
            valueColor,
            emptyColor,
            start,
            progress,
            stop;

        if (canvas.getContext) {
            valueColor = configMap.primaryColor;
            emptyColor = configMap.secondaryColor;

            canvasWidth = parseInt($(jQueryMap.$canvas).css('width'), 10);
            canvasHeight = parseInt($(jQueryMap.$canvas).css('height'), 10);
            circleBorder = canvasWidth * configMap.circleBorderRatio;
            r = (canvasWidth / 2) - (circleBorder / 2);
            x = canvasWidth / 2;
            y = canvasHeight / 2;
            start = Math.PI * -0.5;
            progress = Math.PI * ((value / 100 * 2) - 0.5);
            stop = Math.PI * 1.5;
            ctx = canvas.getContext('2d');
            canvas.setAttribute('width', canvasWidth);
            canvas.setAttribute('height', canvasHeight);

            // value circle part
            ctx.beginPath();
            ctx.arc(x, y, r, start, progress, false);
            ctx.lineWidth = circleBorder;
            ctx.strokeStyle = valueColor;
            ctx.stroke();

            // empty circle part
            ctx.beginPath();
            ctx.arc(x, y, r, progress, stop, false);
            ctx.lineWidth = circleBorder;
            ctx.strokeStyle = emptyColor;
            ctx.stroke();

            ctx.font = 'bold ' + canvasWidth * 0.2 + 'px arial';
            ctx.fillStyle = valueColor;
            ctx.textAlign = 'center';
            ctx.fillText(value + '%', x, y + (canvasWidth * 0.07));
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