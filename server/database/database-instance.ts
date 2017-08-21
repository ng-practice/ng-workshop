import * as Loki from 'lokijs';
import * as LokiFSStructuredAdapter from 'lokijs/src/loki-fs-structured-adapter';


export class DatabaseInstance {
  database = new Loki('./server/database/workshop.json', {
    autosave: true,
    autosaveInterval: 1000
  });

  constructor() {

  }

  public getDatabase() {
    return this.database;
  }
}
