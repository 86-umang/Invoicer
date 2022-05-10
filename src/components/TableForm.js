import React, { useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import '../styles/TableForm.css';

function TableForm({description, setDescription, quantity, setQuantity, price, setPrice, amount, setAmount, list, setList}) {

    const [checked, setChecked] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newItems = {
            id: uuidv4(),
            description: description,
            quantity: quantity,
            price: price,
            amount: amount
        }
        setDescription("")
        setQuantity("")
        setPrice("")
        setAmount("")
        setList([...list, newItems]) 
        console.log(list);
    }

    useEffect(() => {
        const calculateAmount = () => {
            setAmount(quantity * price)
        }

        calculateAmount()
    }, [price, quantity, setAmount])


    return (
        <>
            <form onSubmit={handleSubmit}>
                {!checked ?
                    <div className='mt-16 flex flex-col'>
                        <label htmlFor='description'>Item description</label>
                        <select
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        >
                            <option selected disabled value="">--Select Item--</option>
                            <option>Milk</option>
                            <option>Butter Milk</option>
                            <option>Tea</option>
                            <option>Sugar</option>
                        </select>
                    </div>
                    : (
                        <div className='mt-16 flex flex-col'>
                            <label htmlFor="description1">Enter your Item</label>
                            <input 
                                type="text" 
                                name="description1" 
                                id="description1" 
                                placeholder="Enter your Item"
                                autoComplete="off"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                    )
                }
                <div>
                    <input 
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <label className="p-2 font-normal" htmlFor="check">Check the box if your item is not in the above list and write your item above.</label>
                </div>

                <div className='grid-tableform gap-10'>
                    <div className='mt-5 flex flex-col'>
                        <label htmlFor='quantity'>Quantity</label>
                        <input 
                            type="text"
                            name="quantity"
                            id="quantity"
                            autoComplete="off"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col uppermargin'>
                        <label htmlFor='price'>Price</label>
                        <input 
                            type="text"
                            name="price"
                            id="price"
                            autoComplete="off"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col uppermargin'>
                        <label htmlFor='amount'>Amount</label>
                        <p>{amount}</p>
                    </div>
                </div>
                <button 
                    type='submit'
                    className="mt-5 bg-blue-500 
                        text-white font-bold py-2 px-8 
                        rounded shadow border-2 border-blue-500 
                        hover:bg-transparent hover:text-blue-500
                        transition-all duration-300"
                >Add Table Item</button>
            </form>
        </>
    );
}

export default TableForm;