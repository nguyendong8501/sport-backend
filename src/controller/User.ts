// import { User } from "./entity/User"
// import mongoose from "mongoose";
const mongoose = require("mongoose");
// const Product = mongoose.model("product");
// import * as Product from "../entity/Product";
import User from "../entity/User";
import { NextFunction, Request, Response } from "express";
export const createUser = (req, res, next: NextFunction) => {
  const { name, email,phonenumber } = req.body;

  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name,
    email,
    phonenumber
  });

  return user
    .save()
    .then((user) => res.status(201).json({ user }))
    .catch((error) => res.status(500).json({ error }));
};
export const readUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) =>
      user
        ? res.status(200).json({ user })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export const readAll = (req: Request, res: Response, next: NextFunction) => {
  return User.find()
    .then((User) => res.status(200).json({ User }))
    .catch((error) => res.status(500).json({ error }));
};

export const updateUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;

  return User.findById(userId)
    .then((user) => {
      if (user) {
        user.set(req.body);

        return user
          .save()
          .then((user) => res.status(201).json({ user }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

export const deleteUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.params.userId;

  return User.findByIdAndDelete(userId)
    .then((user) =>
    user
        ? res.status(201).json({ user, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};
