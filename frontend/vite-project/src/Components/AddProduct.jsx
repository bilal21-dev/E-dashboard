// import axios from 'axios'
// import React, { useState } from 'react'

// const AddProduct = () => {
//     const [name, setName] = useState("")
//     const [price, setPrice] = useState("")
//     const [company, setCompany] = useState("")
//     const [category, setCategory] = useState("")
//     const [error, setError] = useState(false);
//     const handleData = async (e) => {
//         e.preventDefault();
//         // console.log(name, price, company, category);
//         if (!name || !price || !company || !category) {
//             setError(true)
//             return false;
//         }
//         const userID = JSON.parse(localStorage.getItem("user"))._id;
//         let result = await axios.post("http://localhost:5000/add-product", {
//             name,
//             price,
//             company,
//             category,
//         })
//         result = result.data
//     }

//     return (
//         <div className="flex items-center justify-center align-middle mt-[35px]">
//             <div className="p-8 rounded-lg shadow-md w-full max-w-sm bg-blue-400">
//                 <h2 className="text-2xl font-bold text-center mb-6 text-white">Product Details</h2>
//                 <form onSubmit={handleData}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-white">Product Name:</label>
//                         <input
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             onChange={(e) => { setName(e.target.value) }}
//                             value={name}
//                         />
//                         {error && !name && <span className='mt-0 p-0 text-red-600'>Enter valid product name</span>}
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium text-white">Product Price:</label>
//                         <input

//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             onChange={(e) => setPrice(e.target.value)}
//                             value={price}
//                         />
//                         { error && !price && <span className='mt-0 p-0 text-red-600'>Enter valid price</span>}
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-sm font-medium text-white">Product Category:</label>
//                         <input
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             onChange={(e) => setCategory(e.target.value)}
//                             value={category}
//                         />
//                         {error && !category && <span className='mt-0 p-0 text-red-600'>Enter valid category</span>}
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-sm font-medium text-white">Product Company:</label>
//                         <input
//                             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             onChange={(e) => setCompany(e.target.value)}
//                             value={company}
//                         />
//                         {error && !company && <span className='mt-0 p-0 text-red-600'>Enter valid company name</span>}
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                         Add Product
//                     </button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default AddProduct



import axios from 'axios'
import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [company, setCompany] = useState("")
    const [category, setCategory] = useState("")
    const [error, setError] = useState(false);

    const handleData = async (e) => {
        e.preventDefault();
        if (!name || !price || !company || !category) {
            setError(true)
            return false;
        }
        const userID = JSON.parse(localStorage.getItem("user"))._id;
        let result = await axios.post("http://localhost:5000/add-product", {
            name,
            price,
            company,
            category,
        });
        result = result.data;
    }

    return (
        <div className="flex items-center justify-center align-middle mt-10 px-4 sm:px-6 lg:px-8">
            <div className="p-8 rounded-lg shadow-md w-full max-w-md sm:max-w-lg bg-blue-400 mb-8">
                <h2 className="text-2xl font-bold text-center mb-6 text-white">Product Details</h2>
                <form onSubmit={handleData}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Product Name:</label>
                        <input
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                        />
                        {error && !name && <span className='mt-0 p-0 text-red-600'>Enter valid product name</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Product Price:</label>
                        <input
                            type='number' min={0} step={500}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                        />
                        {error && !price && <span className='mt-0 p-0 text-red-600'>Enter valid price</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-white">Product Category:</label>
                        <input
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                        />
                        {error && !category && <span className='mt-0 p-0 text-red-600'>Enter valid category</span>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-white">Product Company:</label>
                        <input
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            onChange={(e) => setCompany(e.target.value)}
                            value={company}
                        />
                        {error && !company && <span className='mt-0 p-0 text-red-600'>Enter valid company name</span>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;
