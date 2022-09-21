import Joi from "joi-browser";

const signInSchmea = {
  email: Joi.string()
    .min(6)
    .max(320)
    .required()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  password: Joi.string().min(8).max(1024).required(),
};

export default signInSchmea;
