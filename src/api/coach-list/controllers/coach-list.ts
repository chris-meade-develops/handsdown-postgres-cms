'use strict';

/**
 * coach-list controller
 */

const { createCoreController: createCoreCoachesController } = require('@strapi/strapi').factories;

module.exports = createCoreCoachesController('api::coach-list.coach-list');
