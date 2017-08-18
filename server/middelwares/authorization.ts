import { Router, Request, Response } from 'express';
import { AuthController } from '../auth/controller';
const jwt = require('jsonwebtoken');

export class AuthorizationMiddleware {
  secret = 'sicher';
  constructor(public instance: Router = Router()) {
    this.init();
   }

  rejectOnAlteringUnauthenticated = (req: Request, res: Response, next) => {

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
    this.instance.use('/memo/:id', this.rejectOnAlteringUnauthenticated);
  }
}

