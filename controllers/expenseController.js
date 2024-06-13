import Expense from '../models/expenseModel.js';

export const getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.find();

    res.status(200).json({
      status: 'success',
      data: expenses,
    });
  } catch (err) {
    next(err);
  }
};

export const createExpense = async (req, res, next) => {
  try {
    const { body } = req;
    const expense = await Expense.create(body);

    res.status(201).json({
      status: 'success',
      data: expense,
    });
  } catch (err) {
    next(err);
  }
};
