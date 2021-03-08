const NotAccess = use("App/Exceptions/NotAccessException");
const NotFound = use("App/Exceptions/NotFoundException");

class AutorizationService {
  verification(resource, user) {
    if (!resource) {
      throw new NotFound();
    }
    if (resource.user_id !== user.id) {
      throw new NotAccess();
    }
  }
}

module.exports = new AutorizationService();
