import Joi from "joi-browser";

const signUpSchema = {
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string()
    .min(6)
    .max(320)
    .required()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  password: Joi.string().min(8).max(1024).required(),
};

export default signUpSchema;
