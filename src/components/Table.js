import React from 'react';

function Table({list, total, word}) {
    return (
        <>
            <table className='mt-5' width="100%">
                <thead>
                    <tr className='bg-gray-100'>
                        <td className='font-bold'>Description</td>
                        <td className='font-bold'>Quantity</td>
                        <td className='font-bold'>Unit</td>
                        <td className='font-bold'>Price</td>
                        <td className='font-bold'>Amount</td>
                    </tr>
                </thead>
                {list.map(({id, description, quantity, unit, price, amount}) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{unit}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>

            <table className='mt-5' width="100%">
                <tbody>
                    <tr>
                        <td align='left' className='font-bold text-3xl text-gray-600'>Total:</td>
                        <td align='right' className='font-bold text-3xl text-gray-800'>Rs. {total.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>

            <table className='mt-5' width="100%">
                <tbody>
                    <tr>
                        <td className='font-bold text-xl text-gray-600'>Total in words:</td>
                    </tr>
                    <tr>
                        <td className='pt-1 font-bold uppercase text-gray-800'>{word}</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Table;