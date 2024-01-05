'use strict';

/**
 * website footer service
 */

const { createCoreService: createCoreFooterService } = require('@strapi/strapi').factories;

module.exports = createCoreFooterService('api::website-footer.website-footer');
