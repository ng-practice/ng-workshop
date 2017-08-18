import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors');

import { MemosController } from './memos/controller';
import { AuthController } from './auth/controller';
import AuthorizationMiddleware from './middelwares/authorization';

const app = express();
const port = 4280;

app.use(bodyParser.json());
app.use(cors());
app.use(AuthorizationMiddleware);
app.use('/auth', AuthController);
app.use('/', MemosController);


app.listen(port, () => console.log(`API runs at http://localhost:${port}`));
