import axios from "axios";
import { Product } from "./api/v1/products/route";

export default async function Home() {
  const response = await axios.get("http://localhost:3000/api/v1/products");
  const products: Product[] = response.data;

  return (
    <div>
      {products.map((p: Product, index) => (
        <div className="text-xl" key={index}>
          {p.title} ${p.price}
        </div>
      ))}
    </div>
  );
}
