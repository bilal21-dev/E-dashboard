import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            let result = await axios.get("http://localhost:5000/get-products");
            if (result && Array.isArray(result.data)) {
                setProducts(result.data);
            }
            else {
                setProducts([])
            }
        } catch (error) {
            console.error("Error fetching products:", error);
            setProducts([])

        }
    };
    const deleteProduct = async (id) => {
        let result = await axios.delete(`http://localhost:5000/del-product/${id}`)
        if(result){
            console.warn("product is deleted");
            getProducts()
        }

    }

    return (
        <div>
            <ul className='flex justify-center align-middle mt-5 mb-0'>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>S.Num</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Name</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Price</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Category</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Operation</li>
            </ul>
            {products.length > 0 ? (
                products.map((item, index) => (
                    <ul key={index} className='flex justify-center align-middle mb-0'>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2 font-bold'>{index + 1}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.name}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.price}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.category}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'><button className="bg-red-500 px-2 rounded-md text-white" onClick={()=>deleteProduct(item._id)}>Delete</button></li>

                    </ul>
                ))
            ) : (
                <div className="flex justify-center items-center mt-5">
                    <p>No products available.</p>
                </div>
            )
            }
        </div>
    );
};

export default ProductList;

