'use strict';

/**
 * website footer controller
 */

const { createCoreController: createCoreFooterController } = require('@strapi/strapi').factories;

module.exports = createCoreFooterController('api::website-footer.website-footer');
