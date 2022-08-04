'use strict';

/**
 * service-point router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-point.service-point');
