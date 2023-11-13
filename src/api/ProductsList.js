import { React, useEffect, useState } from "react";
import axios from "axios";

const ProductsList = () => {
  const GET_API = "https://api.escuelajs.co/api/v1/products";

  const [product, setProduct] = useState([]);
  console.log(product);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(GET_API);
        setProduct(response.data);
      } catch (error) {
        console.error("Error Fetching Data", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {product.map((products) => (
        <Card info={products} key={products.id}></Card>
      ))}
    </div>
  );
};

function Card({ info }) {
  return <div></div>;
}

export default ProductsList;
