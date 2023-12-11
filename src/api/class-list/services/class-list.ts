'use strict';

/**
 * class-list service
 */

const { createCoreService: createClassListService } = require('@strapi/strapi').factories;

module.exports = createClassListService('api::class-list.class-list');
