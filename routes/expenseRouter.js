import express from 'express';

import * as expenseController from '../controllers/expenseController.js';
import { validateExpense } from '../middlewares/validator.js';

const router = express.Router();

router.get('/', expenseController.getExpenses);
router.post('/', validateExpense, expenseController.createExpense);

export default router;
