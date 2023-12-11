'use strict';

/**
 * graduate-list router
 */

const { createCoreRouter: createCoreGraduateListRoutes } = require('@strapi/strapi').factories;

module.exports = createCoreGraduateListRoutes('api::graduate-list.graduate-list');
