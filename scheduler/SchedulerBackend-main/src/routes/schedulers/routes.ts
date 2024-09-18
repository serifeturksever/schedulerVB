import express from 'express';
import { _getScheduledScripts } from './get';
import { _createScheduledScripts, _updateScheduledScripts, _deleteScheduledScripts } from './post';

export const router = express.Router();

router
  .get('/', _getScheduledScripts)
  .post('/create', _createScheduledScripts)
  .post('/update', _updateScheduledScripts)
  .post('/delete', _deleteScheduledScripts)