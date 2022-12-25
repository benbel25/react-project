import Joi from "joi-browser";

const signUpSchema = {
  name: Joi.string().min(2).max(255).required(),
  email: Joi.string()
    .min(6)
    .max(320)
    .required()
    .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
  password: Joi.string()
    .max(1024)
    .required()
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]{4,})(?=.*?[#?!@$%^&*-]).{8,}$/
    ),
};

export default signUpSchema;
