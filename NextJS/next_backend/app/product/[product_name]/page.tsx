import axios from "axios";
import { response } from "express";
import React from "react";

type ProductProps = {
  params: {
    product_name: string;
  };
};

const Product = async ({ params }: ProductProps) => {
  //   console.log((params).product_name);
  const title: string = (await params).product_name;

 

  return <div>Product {title}</div>;
};

export default Product;
