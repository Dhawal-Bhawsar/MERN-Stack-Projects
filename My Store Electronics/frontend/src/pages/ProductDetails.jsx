import {useEffect, useState} from "react";
import api from "../api/axios";
import { useParams } from "react-router";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const loadProduct = async () => {
        const res = await api.get("/products/");
        const p = res.data.find((item) => item._id === id);
        setProduct(p);
    };
    useEffect(() => {
        loadProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <img src={product.image} alt={product.title} className="w-full h-40 object-contain bg-white rounded"/>
        <h1 className="mt-4 text-2xl font-bold">{product.title}</h1>
        <p className="mt-2 font-semibold text-gray-600">${product.price}</p>
        <p className="mt-2 text-gray-800">{product.description}</p>

        <button className="mt-4 bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button> 
      </div>
    )
}
