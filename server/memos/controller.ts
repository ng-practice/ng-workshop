import { Router, Request, Response } from 'express';
import { MemoDatabase } from '../database/memo-database';



export class MemosController {


constructor(private memoDatabase: MemoDatabase, public instance: Router = Router() ) {
  this.init();
 }

init() {
  this.instance.get('/memos', this.all);
  this.instance.get('/memos/:query', this.search);
  this.instance.get('/memo/:id', this.single);
  this.instance.post('/memo/:id', this.create);
  this.instance.put('/memo/:id', this.update);
  this.instance.delete('/memo/:id', this.remove);
}

single = (req: Request, res: Response) => {

}

all = (req: Request, res: Response) => {
  res.status(200).send(this.memoDatabase.getAll());
}

search = (req: Request, res: Response) => {

}

create = (req: Request, res: Response) => {
  res.status(201).send('created');
}

update = (req: Request, res: Response) => {

}

remove = (req: Request, res: Response) => {

}

}

