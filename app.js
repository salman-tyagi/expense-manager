import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

import expenseRouter from './routes/expenseRouter.js';
import AppError from './utils/appError.js';
import globalErrorHandler from './middlewares/globalErrorHandler.js';

const app = express();

app.use(helmet());

app.use(morgan('dev'));

app.use('/api/v1/expenses', expenseRouter);

app.all('*', (req, res, next) =>
  next(new AppError(`No ${req.originalUrl} url exists on this server`, 404))
);

app.use(globalErrorHandler);

export default app;
