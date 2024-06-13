import mongoose from 'mongoose';

const expenseSchema = new mongoose.Schema({
  expense: {
    type: String,
    required: [true, 'Provide expense name'],
  },
  category: {
    type: String,
    enum: ['food', 'utility'],
    required: [true, 'Category required'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount required'],
  },
  attachment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
