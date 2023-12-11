'use strict';

/**
 * class-list router
 */

const { createCoreRouter: classListRoutesCreateCoreRouter } = require('@strapi/strapi').factories;

module.exports = classListRoutesCreateCoreRouter('api::class-list.class-list');
