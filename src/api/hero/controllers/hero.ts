'use strict';

/**
 * hero controller
 */

const { createCoreController: createCoreHerosController } = require('@strapi/strapi').factories;

module.exports = createCoreHerosController('api::hero.hero');
