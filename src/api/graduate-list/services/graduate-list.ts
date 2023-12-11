'use strict';

/**
 * graduate-list service
 */

const { createCoreService: createCoreGraduateListsService } = require('@strapi/strapi').factories;

module.exports = createCoreGraduateListsService('api::graduate-list.graduate-list');
