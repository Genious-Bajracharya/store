"use client"
import { useEffect, useState } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Products(){
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(()=>{
        const fetchProducts= async ()=>{
            try{
                const fetchdata= await axios.get("https://fakestoreapi.com/products")
                setProducts(fetchdata.data)
            }catch(error){
                console.log(error)
            }
            
        }
        fetchProducts();
    },[])

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
      };

      const handleProductClick = (id: number) => {
        router.push(`/productdetail/${id}`);
      };

      return (
        <div className="px-4 py-8 sm:px-8 lg:px-16">
          <h2 className=" text-blue-800 text-3xl font-bold text-center mb-6">OUR PRODUCTS</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
                onClick={()=> handleProductClick(product.id)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className=" text-blue-800 font-semibold text-lg truncate ">{product.title}</h3>
                  <p className="text-gray-600 mt-2 truncate">{product.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold text-red-500">${product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          {visibleCount < products.length && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      );
    }

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }