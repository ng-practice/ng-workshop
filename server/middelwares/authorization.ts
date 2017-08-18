import { Router, Request, Response } from 'express';
import { AuthController } from '../auth/controller';
const jwt = require('jsonwebtoken');



export class AuthorizationMiddleware {
  router: Router;
  secret = 'sicher';
  constructor() {
    this.router = Router();
    this.init();
   }

  rejectOnPostUnauthenticated = (req: Request, res: Response, next) => {

    if (req.method === 'GET') {
      next();
    } else {
      jwt.verify(req.headers['authorization'], this.secret, (err, decoded) => {
        if (err || decoded.role !== 'member') {
          res.status(403).send('rejected');
        } else {
          next();
        }
      });
    }
  }

  init() {
    this.router.use('/memo/:id', this.rejectOnPostUnauthenticated);
  }
}
const authMiddleware = new AuthorizationMiddleware();
authMiddleware.init();

export default authMiddleware.router;
