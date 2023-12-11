'use strict';

/**
 * custom-page service
 */

const { createCoreService: createCoreCustomPagesService } = require('@strapi/strapi').factories;

module.exports = createCoreCustomPagesService('api::custom-page.custom-page');
