import React from 'react';

function Table({list, total}) {
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

            <div className='mt-8'>
                <h2 className='flex items-end justify-end text-gray-800 text-4xl font-bold'>Rs. {total.toLocaleString()}</h2>
            </div>
        </>
    );
}

export default Table;