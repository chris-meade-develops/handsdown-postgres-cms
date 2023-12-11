'use strict';

/**
 * coach-list router
 */

const { createCoreRouter: createCoreCoachesRouter } = require('@strapi/strapi').factories;

module.exports = createCoreCoachesRouter('api::coach-list.coach-list');
