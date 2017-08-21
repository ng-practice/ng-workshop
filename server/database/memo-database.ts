import * as Loki from 'lokijs';
import { DatabaseInstance } from './database-instance';

export class MemoDatabase {

  database = this.databaseInstace.getDatabase();
  memos = this.database.addCollection('memos');

  constructor(public databaseInstace: DatabaseInstance) {
    this.memos.insert([
      { id: 1, tilte: 'erste Notiz', text: 'denke daran Komponenten zu importieren und exportieren', todos: [] },
      { id: 2, tilte: 'Angular Documentation', text: 'check out https://angular.io', todos: []},
      { id: 3, tilte: 'Einkaufsliste', text: 'Folgendes kannst du im Supermarkt holen', 'todos': [
        {id: '31', task: 'Milch'},
        {id: '32', task: 'Butter'},
        {id: '33', task: 'Eier'}]}
    ]);
  }

  getAll() {
    return this.memos.find({'id': {'$ne': 0} });
  }

}

