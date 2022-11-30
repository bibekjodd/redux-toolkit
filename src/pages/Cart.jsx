import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';


function Cart() {
    const products = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (product) => {
        dispatch(remove(product))
    }

    return (
        <div className='px-3 sm:px-4 font-semibold text-gray-600 mx-auto'>
            {
                products.length !== 0
                    ? <h1 className='px-3o text-2xl font-normal'>Your Cart</h1>
                    : <h1 className='px-3 text-2xl font-normal'>No items on Your Cart</h1>
            }

            <table className='border-spacing-y-5 border-separate '>
                <tbody className=''>
                    {products.map((product, i) => (
                        <tr key={product.id}
                            className=' bg-white rounded-md shadow-lg shadow-gray-200/50  '
                        >
                            <td className='p-3'>
                                <img
                                    loading='lazy'
                                    src={product.image} alt=""
                                    className='h-20 object-contain mx-auto'
                                />
                            </td>

                            <td className='text-left'>{product.title}</td>

                            <td className='px-2'>{product.price}</td>
                            <td className='px-3'>
                                <button
                                    onClick={() => { handleRemove(product) }}
                                    className='px-3 py-1  rounded-md text-white text-sm bg-gradient-to-b from-sky-500 to-sky-400 active:from-sky-400 active:to-sky-400 shadow-md'>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Cart