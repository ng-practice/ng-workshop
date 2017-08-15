import { Todo } from './todo';

export class Memo {
  priority = 0;
  backgroundColor = 'white';
  public id: string;

  constructor(
    public title: string,
    public text: string,
    public todos: Todo[]) {}
}
