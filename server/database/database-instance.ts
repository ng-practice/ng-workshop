import * as Loki from 'lokijs';


export class DatabaseInstance {
  database;
  constructor() {
    this.database = new Loki('workshop.db');
  }

  public getDatabase() {
    return this.database;
  }
}
