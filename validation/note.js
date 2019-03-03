const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateNoteInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.text = !isEmpty(data.text) ? data.text : '';

  if (!Validator.isLength(data.text, { min: 1, max: 1000 })) {
    errors.text = 'Notes must be less than 1000 characters';
  }
  if (!Validator.isLength(data.title, { min: 1, max: 26 })) {
    errors.title = 'Title must be less than 20 charaters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Your note content is required';
  }
  if (Validator.isEmpty(data.title)) {
    errors.title = 'Your note title is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
