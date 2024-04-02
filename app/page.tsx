"use client"
import { useEffect, useState } from "react";
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        console.log('herererere', response.data.products)
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [products]);


  return (
    <div className="h-[90%] overflow-y-hidden">
    <h1 className="font-bold text-xl ml-8 mb-3">Product List</h1>
    <div className="ml-7 flex flex-wrap gap-6 h-[90%] overflow-y-auto">
      {products && products.map((product, index) => (
        <div key={index} className="border border-grey-900 w-[300px] p-4 rounded-lg ">
          <p className="font-semibold">{product.title}</p>
          <p>Brand: {product.brand}</p>
          <p>Category: {product.category}</p>
        </div>
      ))}
    </div>
  </div>
  );
}



