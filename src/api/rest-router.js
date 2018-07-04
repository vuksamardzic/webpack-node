import express from 'express';
import { apiErrorHandler } from './modules/error-handler';

export const restRouter = express.Router({});

restRouter.use(apiErrorHandler);
