import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const obtenerProducto = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`);
      setProducto(data);
    };

    obtenerProducto();
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div>
      <img src={producto.image} alt={producto.name} />
      <h1>{producto.name}</h1>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ProductDetails;
