'use strict';

/**
 * Throws an exception when a required parameter is not informed.
 * @param {String} errorMessage Message to be displayed on exception.
 * 
 * @example
 * funtion foo(bar = requiredParameter()) { ... }
 */
export default (errorMessage = 'Missing parameter') => {
    throw new Error(errorMessage);
};
