'use strict';

/**
 * hero router
 */

const { createCoreRouter: createCoreHerosRoutes } = require('@strapi/strapi').factories;

module.exports = createCoreHerosRoutes('api::hero.hero');
