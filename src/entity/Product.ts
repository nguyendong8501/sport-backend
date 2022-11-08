// import { number } from "joi";
// import {
//   Entity,
//   Column,
//   PrimaryGeneratedColumn,
//   ObjectIdColumn,
//   ObjectID,
// } from "typeorm";
// // const mongoose = require("mongoose");
// // const { Schema } = mongoose;
// @Entity()
// export class Product {
//   @ObjectIdColumn()
//   id: ObjectID;

//   @Column()
//   Name: string;

//   @Column()
//   age: number;
// }

// const productSchema = new Schema({
//   id: { type: Schema.Types.ObjectId },

//   name: { type: String, required: true },
//   age: { type: number },
// });

// mongoose.model("product", productSchema);

import { number } from "joi";

import mongoose, { Document, Schema } from "mongoose";

export interface Product {
  name: string;
  cost: number;
  amount: number;
}

export interface ProductModel extends Product, Document {}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    amount: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ProductModel>("Product", ProductSchema);
