'use strict';

/**
 * service-point service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-point.service-point');
