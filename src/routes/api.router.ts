import express, { type Router } from 'express';
import type { AppDeps } from '../types/app-deps.type.js';
import { rejectUnknownApiRoute } from './not-found.route.js';

export function createApiRouter(_deps: AppDeps): Router {
  const router = express.Router();
  router.use(rejectUnknownApiRoute);
  return router;
}
