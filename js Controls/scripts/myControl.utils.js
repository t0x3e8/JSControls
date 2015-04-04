/*
 * 
 * 
 */

myControl.utils = (function () {
    'use strict';

    var setConfigMap, makeError;

    // Purpose: a convenience wrapper to create an error object
    // Arguments:
    //   * nameText - the error name
    //   * msgText  - long error message
    //   * data      - optional data attached to error object
    // Returns  : newly constructed error object
    // Throws   : none
    makeError = function (nameText, msgText, data) {
        var error = new Error();
        error.message = msgText;
        error.name = nameText;

        if (data) {
            error.data = data;
        }

        return error;
    };

    // Begin Public method /setConfigMap/
    // Purpose: Common code to set configs in feature modules
    // Arguments:
    //   * inputMap    - map of key-values to set in config
    //   * settableMap - map of allowable keys to set
    //   * configMap   - map to apply settings to
    // Returns: true
    // Throws : Exception if input key not allowed
    setConfigMap = function (argMap) {
        var inputMap = argMap.inputMap,
            settableMap = argMap.settableMap,
            configMap = argMap.configMap,
            keyName, error;

        for (keyName in inputMap) {
            if (inputMap.hasOwnProperty(keyName)) {
                if (settableMap.hasOwnProperty(keyName)) {
                    configMap[keyName] = inputMap[keyName];
                }
                else {
                    error = makeError('Bad input', 'Setting config key [' + keyName + '] is not supported.');
                    throw error;
                }
            }
        }
    };

    return {
        setConfigMap: setConfigMap,
        makeError: makeError,
    };

}());