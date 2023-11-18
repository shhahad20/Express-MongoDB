import { NextFunction, Request, Response } from "express";

import { ProductInput } from "../types/productsTypes";
import { Product } from "../models/productSchema";

export const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("Get request products");
    const products = await Product.find();
    console.log(products);
    res
      .status(200)
      .json({ message: "all products is here", payload: products });
  } catch (error) {
    next(error);
  }
};
export const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      throw new Error(`Product not found with id ${id}`);
    }
    res.status(200).json({ message: "Get product by Id", payload: product });
  } catch (error) {
    next(error);
  }
};
export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save(); // <-- Another command to create doc
    res.status(200).json({
      message: "created one product",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deleteProduct) {
      throw new Error(`Product not found with id ${id}`);
    }
    const products = await Product.find();
    res
      .status(200)
      .json({ message: `You deleted with ID: ${id}`, payload: products });
  } catch (error) {
    next(error);
  }
};
export const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedProduct: ProductInput = req.body;
    const updateData = await Product.findByIdAndUpdate(id,updatedProduct);
    if (!updateData) {
        throw new Error(`Product not found with id ${id}`);
      }
      const products = await Product.find();

    res
      .status(200)
      .json({ message: `You updated a product with ID: ${id}`, payload: products });
  } catch (error) {
    next(error);
  }
};
