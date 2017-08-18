import { Router, Request, Response } from 'express';


const router = Router();

export const MemosController = router;


router.get('/memos', all);
router.get('/memos/:query', search);
router.get('/memo/:id', single);
router.post('/memo/:id', create);
router.put('/memo/:id', update);

router.delete('/memo/:id', remove);

function single(req: Request, res: Response) {

}

function all(req: Request, res: Response) {

}

function search(req: Request, res: Response) {

}

function create(req: Request, res: Response) {
  res.status(201).send('created');
}

function update(req: Request, res: Response) {

}

function remove(req: Request, res: Response) {

}

// Get /memos (all)
// Get /memo/:id
// Push /memo/:id
// Put /memo/:id

// POST /user/:email Create User
// GET /user/id
