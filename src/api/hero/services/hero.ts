'use strict';

/**
 * hero service
 */

const { createCoreService: createCoreHerosService } = require('@strapi/strapi').factories;

module.exports = createCoreHerosService('api::hero.hero');
