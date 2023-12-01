import React, { useState, createContext, useContext } from "react";
import axios from "axios";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [addeditem, setAddedItem] = useState([]);
  const [product, setProduct] = useState([]);

  const updateQuantity = (itemId, quantity) => {
    setAddedItem((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + quantity } : item
      )
    );
  };

  const AddToCart = (item) => {
    const exist = addeditem.find((x) => x.id === item.id);
    if (exist) {
      setAddedItem(
        addeditem.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setAddedItem([...addeditem, { ...item, qty: 1 }]);
    }
  };

  const GET_API = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const response = await axios.get(GET_API);
      setProduct(response.data);
    } catch (error) {
      console.error("Error Fetching Data", error);
    }
  };

  return (
    <ProductContext.Provider
      value={{ addeditem, product, AddToCart, fetchData, updateQuantity }}
    >
      {children}
    </ProductContext.Provider>
  );
};
