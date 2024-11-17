import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductList = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
      setProductos(data);
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-list">
        {productos.map((producto) => (
          <ProductCard key={producto._id} product={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
