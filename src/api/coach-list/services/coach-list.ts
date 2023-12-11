'use strict';

/**
 * coach-list service
 */

const { createCoreService: createCoreCoachesService } = require('@strapi/strapi').factories;

module.exports = createCoreCoachesService('api::coach-list.coach-list');
