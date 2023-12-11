'use strict';

/**
 * custom-page controller
 */

const { createCoreController: createCoreCustomPagesController } = require('@strapi/strapi').factories;

module.exports = createCoreCustomPagesController('api::custom-page.custom-page');
