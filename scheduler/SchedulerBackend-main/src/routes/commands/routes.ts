import express from 'express';
import { _runShellScripts } from './get';
import { _runPowershell } from './post';

export const router = express.Router();

router
  .get('/:id', _runShellScripts)
  .post('/powershell', _runPowershell)
