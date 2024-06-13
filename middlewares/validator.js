import { Joi, celebrate } from 'celebrate';

export const validateExpense = celebrate({
  body: Joi.object().keys({
    expense: Joi.string()
      .required()
      .alphanum()
      .trim()
      .min(2)
      .max(30)
      .label('Expense'),
    category: Joi.string().required().trim().min(2).max(15).label('Category'),
    amount: Joi.number().integer().required().min(2).label('Amount'),
    attachment: Joi.string().max(40).label('Attachment'),
  }),
});
