// import { User } from "./entity/User"
// import mongoose from "mongoose";
const mongoose = require("mongoose");
// const Product = mongoose.model("product");
// import * as Product from "../entity/Product";
import Product from "../entity/Product";
import { NextFunction, Request, Response } from "express";
export const createProduct = (req, res, next: NextFunction) => {
  const { name, cost, amount, supplier,
    description } = req.body;

  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name,
    cost,
    amount,
    supplier,
    description,
  });

  return product
    .save()
    .then((product) => res.status(201).json({ product }))
    .catch((error) => res.status(500).json({ error }));
};
export const readProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.productId;

  return Product.findById(productId)
    .then((product) =>
      product
        ? res.status(200).json({ product })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};

export const readAll = (req: Request, res: Response, next: NextFunction) => {
  return Product.find()
    .then((products) => res.status(200).json({success: true, products }))
    .catch((error) => res.status(500).json({ error }));
};

export const updateProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.productId;

  return Product.findById(productId)
    .then((product) => {
      if (product) {
        product.set(req.body);

        return product
          .save()
          .then((product) => res.status(201).json({ product }))
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(404).json({ message: "not found" });
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

export const deleteProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const productId = req.params.productId;

  return Product.findByIdAndDelete(productId)
    .then((product) =>
    product
        ? res.status(201).json({ product, message: "Deleted" })
        : res.status(404).json({ message: "not found" })
    )
    .catch((error) => res.status(500).json({ error }));
};
