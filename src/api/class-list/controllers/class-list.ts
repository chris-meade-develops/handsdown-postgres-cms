'use strict';

/**
 * class-list controller
 */

const { createCoreController: classListController } = require('@strapi/strapi').factories;

module.exports = classListController('api::class-list.class-list');
