import { Todo } from './todo';

export class Memo {
  priority: number;

  constructor(
    public header,
    public content: string,
    public todos: Todo[]) {}
}
