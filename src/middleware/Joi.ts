// // const joi = require("joi");
// import Joi, { ObjectSchema } from "joi";

// import { NextFunction, Request, Response } from "express";
// import { Product } from "../entity/Product";
// // import { IBook } from "../models/Book";
// import Logging from "../library/Logging";

// export const ValidateJoi = (schema: ObjectSchema) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.validateAsync(req.body);

//       next();
//     } catch (error) {
//       Logging.error(error);

//       return res.status(422).json({ error });
//     }
//   };
// };

// export const Schemas = {
//   author: {
//     create: Joi.object<Product>({
//       name: Joi.string().required(),
//       age: Joi.number().required(),
//     }),
//     update: Joi.object<Product>({
//       name: Joi.string().required(),
//       age: Joi.number().required(),
//     }),
//   },
//   //   book: {
//   //     create: Joi.object<IBook>({
//   //       author: Joi.string()
//   //         .regex(/^[0-9a-fA-F]{24}$/)
//   //         .required(),
//   //       title: Joi.string().required(),
//   //     }),
//   //     update: Joi.object<IBook>({
//   //       author: Joi.string()
//   //         .regex(/^[0-9a-fA-F]{24}$/)
//   //         .required(),
//   //       title: Joi.string().required(),
//   //     }),
//   //   },
// };
