/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
import cors from 'cors';

import type { Message } from '@of-chat-ws/chat-websocket-protocol'

const app = express();

const corsConfig = {
  origin: '*'
}

app.use(cors(corsConfig))
app.use('/assets', express.static(path.join(__dirname, 'assets')));


app.get('/api', (req, res) => {
  const msg: Message<'connect', {a: 1}> = {
    type: 'connect',
    body: {a: 1}
  }
  res.send(msg);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
