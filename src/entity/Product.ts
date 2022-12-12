import { number } from "joi";

import mongoose, { Document, Schema } from "mongoose";

export interface Product {
  name: string;
  cost: number;
  amount: number;
  supplier:string;
  description:string;
}

export interface ProductModel extends Product, Document {}

const ProductSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    amount: { type: Number, required: true },
    supplier: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

export default mongoose.model<ProductModel>("Product", ProductSchema);
