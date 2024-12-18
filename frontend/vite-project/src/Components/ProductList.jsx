import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        if (result) {
            console.warn("product is deleted");
            getProducts()
        }

    }
    const handleSearch = async (e) => {
        let key = e.target.value
        if (key) {
            let result = await axios.get(`http://localhost:5000/search/${key}`)
            setProducts(result.data)
        }
        else{
            getProducts();
        }
    }
    return (
        <div>
            <h1 className='flex align-middle justify-center text-2xl font-bold mt-5 '>Product List</h1>
            <div className="flex justify-center items-center align-middle mt-2">
                <input
                    type="text"
                    placeholder="Search Product"
                    className="border border-black p-2 rounded w-1/2"
                    onChange={handleSearch}
                />
            </div>
            <ul className='flex justify-center align-middle mt-5 mb-0'>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>S.Num</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Name</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Price</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Category</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Company</li>
                <li className='border border-red-500 px-7 w-[150px] text-center font-extrabold py-2'>Operation</li>
            </ul>
            {products.length > 0 ? (
                products.map((item, index) => (
                    <ul key={index} className='flex justify-center align-middle mb-0'>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2 font-bold'>{index + 1}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.name}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.price}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.category}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2'>{item.company}</li>
                        <li className='border border-red-500 px-7 w-[150px] text-center py-2 flex align-middle justify-center gap-2'><button className="bg-red-500 px-2 rounded-md text-white" onClick={() => deleteProduct(item._id)}>Delete</button><Link className='bg-gray-500 px-2 rounded-md text-white' to={`/update/${item._id}`}>Update</Link></li>

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

