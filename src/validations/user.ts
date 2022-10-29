import Joi from "joi";
import { GENDER, MODE_OF_CONTACT } from "../config/enums";

export const createUserValidationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  address: Joi.string().min(2).max(100).required(),
  phone: Joi.string().length(10).allow(null),
  gender: Joi.string().valid(GENDER.MALE, GENDER.FEMALE, GENDER.OTHERS),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
  nationality: Joi.string().min(1).max(100).allow(null),
  dateOfBirth: Joi.date().required().allow(null),
  educationBackground: Joi.string().allow(null),
  preferedContactMethod: Joi.string()
    .valid(MODE_OF_CONTACT.EMAIL, MODE_OF_CONTACT.PHONE, MODE_OF_CONTACT.NONE)
    .allow(null),
});

export const getAllUsersValidationSchema = Joi.object({
  page: Joi.number().integer().positive().min(1).max(100000),
  limit: Joi.number().integer().positive().min(1).max(1000),
});
