import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import { MemosController } from './memos/controller';
import { AuthController } from './auth/controller';
import {AuthorizationMiddleware} from './middelwares/authorization';
import { DatabaseInstance } from './database/database-instance';
import { MemoDatabase } from './database/memo-database';

const databaseInstance = new DatabaseInstance();
databaseInstance.database.loadDatabase({}, (err, data) => {
  console.log(data, err);
  if (!err) {
  const memoDatabase = new MemoDatabase(databaseInstance);
  const authMiddleware = new AuthorizationMiddleware();
  const memosController = new MemosController(memoDatabase);

  const app = express();
  const port = 4280;

  app.use(bodyParser.json());
  app.use(cors());
  app.use(authMiddleware.instance);
  app.use('/auth', AuthController);
  app.use('/', memosController.instance);

  app.listen(port, () => console.log(`API runs at http://localhost:${port}`));
  } else {
    console.log(err);
  }
});
