'use strict';

/**
 * custom-page router
 */

const { createCoreRouter: createCoreCustomPagesRoutes } = require('@strapi/strapi').factories;

module.exports = createCoreCustomPagesRoutes('api::custom-page.custom-page');
