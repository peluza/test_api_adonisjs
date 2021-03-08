"use strict";

const { LogicalException } = require("@adonisjs/generic-exceptions");

class NotAccessException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  handle(error, { response }) {
    return response.status(403).json({
      error: "Acceso no autorizado",
    });
  }
}

module.exports = NotAccessException;
