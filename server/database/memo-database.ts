import * as Loki from 'lokijs';
import { DatabaseInstance } from './database-instance';

export class MemoDatabase {
  memos;
  database;


  constructor(public databaseInstance: DatabaseInstance) {

    this.database = this.databaseInstance.getDatabase();
    console.log(this.database);
    this.memos = this.database.getCollection('memos');
    console.log(this.memos);
    if (!this.memos) {
      console.log('new Collection \'memos\' initialized');
    this.memos = this.database.addCollection('memos', { indices: ['id'] });
    this.memos.insert([
      { id: '1', title: 'erste Notiz', text: 'denke daran Komponenten zu importieren und exportieren', todos: [] },
      { id: '2', title: 'Angular Documentation', text: 'check out https://angular.io', todos: []},
      { id: '3', title: 'Einkaufsliste', text: 'Folgendes kannst du im Supermarkt holen', 'todos': [
        {id: '31', task: 'Milch'},
        {id: '32', task: 'Butter'},
        {id: '33', task: 'Eier'}]}
    ]);
  }

  }

  getAll() {
    return this.memos.find({'id': {'$ne': 0} });
  }

}

