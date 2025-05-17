import { NextRequest, NextResponse } from "next/server";

export interface Product {
  title: string;
  price: number;
}

export const products: Product[] = [
  { title: "Laptop", price: 75000 },
  { title: "Smartphone", price: 30000 },
  { title: "Headphones", price: 2500 },
  { title: "Keyboard", price: 1500 },
  { title: "Monitor", price: 12000 },
];

export const GET = () => {
  // NextRequest
  return NextResponse.json(products);
};
