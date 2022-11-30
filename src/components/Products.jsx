import React, { useEffect, useState } from 'react'
import { BiLoader } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { RiErrorWarningLine } from 'react-icons/ri'



function Products() {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const { data: products, status } = useSelector(state => state.product);

    useEffect(() => {
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json();
        //     setProducts(data);
        // }
        // fetchProducts();

        dispatch(fetchProducts());
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <>
            {status === 'loading' && <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <BiLoader className='text-2xl md:text-4xl animate-spin' />
            </div>}


            {status === 'error' && <div className=' absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center'>
                <RiErrorWarningLine className='text-2xl  mr-1' />
                <span>Couldn't get the products</span>
            </div>}


            {status === 'idle' && <div className='grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-semibold px-1 text-gray-700'> 
                {
                    products.map(product => (
                        <div key={product.id}
                            className=' bg-white flex flex-col items-center m-3 p-3 rounded-md shadow-lg shadow-gray-200/50 '
                        >
                            <img
                                loading='lazy'
                                src={product.image} alt=""
                                className='object-contain w-1/2  aspect-video'
                            />

                            <p className='text-left my-3'>{product.title}</p>

                            <p className='mb-3'>{product.price}</p>

                            <button
                                onClick={() => { handleAdd(product) }}
                                className='px-2 py-1 mt-auto rounded-md text-white text-sm bg-gradient-to-b from-sky-500 to-sky-400 active:from-sky-400 active:to-sky-400 shadow-md'>
                                Add to cart
                            </button>
                        </div>
                    ))
                }
            </div>
            }
        </>
    )
}

export default Products