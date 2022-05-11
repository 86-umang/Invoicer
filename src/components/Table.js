import React from 'react';

function Table({list}) {
    return (
        <>
            <table className='mt-5' width="100%">
                <thead>
                    <tr className='bg-gray-100'>
                        <td className='font-bold'>Description</td>
                        <td className='font-bold'>Quantity</td>
                        <td className='font-bold'>Price</td>
                        <td className='font-bold'>Amount</td>
                    </tr>
                </thead>
                {list.map(({id, description, quantity, price, amount}) => (
                    <React.Fragment key={id}>
                        <tbody>
                            <tr>
                                <td>{description}</td>
                                <td>{quantity}</td>
                                <td>{price}</td>
                                <td>{amount}</td>
                            </tr>
                        </tbody>
                    </React.Fragment>
                ))}
            </table>
        </>
    );
}

export default Table;