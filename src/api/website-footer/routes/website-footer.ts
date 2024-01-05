'use strict';

/**
 * website footer router
 */

const { createCoreRouter: createCoreFooterRouter } = require('@strapi/strapi').factories;

module.exports = createCoreFooterRouter('api::website-footer.website-footer');
