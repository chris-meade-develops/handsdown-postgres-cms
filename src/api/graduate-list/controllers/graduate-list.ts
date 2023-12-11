'use strict';

/**
 * graduate-list controller
 */

const { createCoreController: createCoreGraduateListsController } = require('@strapi/strapi').factories;

module.exports = createCoreGraduateListsController('api::graduate-list.graduate-list');
