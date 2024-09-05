import { useParams } from "react-router";
import ProductsCard from "../components/ProductsCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Product() {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    images: [],
  });
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => setProduct(res.data));
  }, []);
  console.log(product);
  return <ProductsCard product={product} />;
}
