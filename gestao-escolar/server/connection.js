'use strict';

class DatabaseConnection {

  instance;

  constructor() {
    if (!this.getInstance()) {
      this.setInstance(new MongoInternals.RemoteCollectionDriver("mongodb://127.0.0.1:3001/meteor"));
    } else {
      return instance;
    }
  }

  setInstance() {
    instance = ref;
  }

  getInstance() {
    return instance;
  }
}

export default DatabaseConnection;
