import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import '../styles/TableForm.css';

function TableForm({description, setDescription, quantity, setQuantity, unit, setUnit, price, setPrice, amount, setAmount, list, setList, total, setTotal, word, setWord}) {

    const [checked, setChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Submit Form Function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!description || !quantity || !unit || !price) {
            alert("Please fill in all inputs")
        } else {
            const newItems = {
                id: uuidv4(),
                description: description,
                quantity: quantity,
                unit: unit,
                price: price,
                amount: amount
            }
            setDescription("")
            setQuantity("")
            setUnit("pkt")
            setPrice("")
            setAmount("")
            setList([...list, newItems]) 
            setIsEditing(false)
        }

    }

    // Calculate items amount function
    useEffect(() => {
        const calculateAmount = () => {
            setAmount(quantity * price)
        }

        calculateAmount()

    }, [price, quantity, setAmount])

    // Calcualte total amount of items in table
    useEffect(() => {
        let rows = document.querySelectorAll(".amount");
        let sum = 0;
    
        for(let i = 0; i < rows.length; i++) {
            if (rows[i].className === "amount") {
                sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
                setTotal(sum);
            }
        }
    })

    useEffect(() => {
        var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
        var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

        function inWords (num) {
            if ((num = num.toString()).length > 9) return 'overflow';
            let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) return; var str = '';
            str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
            str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
            str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
            str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
            str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
            return str;
        }

        setWord(inWords(total))
    },[total, word, setWord])

    // Edit function
    const editRow = (id) => {
        const editingRow = list.find((row) => row.id === id);
        setList(list.filter((row) => row.id !== id));
        setIsEditing(true)
        setDescription(editingRow.description)
        setQuantity(editingRow.quantity)
        setUnit(editingRow.unit)
        setPrice(editingRow.price)
    }

    // Delete function
    const deleteRow = (id) => {
        setList(list.filter((row) => row.id !== id));
    }


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
                            <option disabled value="">--Select Item--</option>
                            <option>Milk (Gold)</option>
                            <option>Milk (Shakti)</option>
                            <option>Milk (Taja)</option>
                            <option>Milk (Small)</option>
                            <option>Butter Milk</option>
                            <option>Coffee</option>
                            <option>Curd</option>
                            <option>Loose Curd</option>
                            <option>Tin Curd</option>
                            <option>Tea</option>
                            <option>Tea Masala</option>
                            <option>Sugar</option>
                            <option>Glass</option>
                            <option>Bun</option>
                            <option>Bread</option>
                            <option>Flavour Milk</option>
                            <option>Biscuit</option>
                            <option>Toast</option>
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
                            type="number"
                            name="quantity"
                            id="quantity"
                            autoComplete="off"
                            placeholder="Quantity"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                    </div>

                    <div className='flex flex-col uppermargin'>
                        <label htmlFor='unit'>Unit</label>
                        <select
                            id="unit"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                        >
                            <option disabled value="">--Select Unit--</option>
                            <option>kg</option>
                            <option>pkt</option>
                        </select>
                    </div>

                    <div className='flex flex-col uppermargin'>
                        <label htmlFor='price'>Price</label>
                        <input 
                            type="number"
                            name="price"
                            id="price"
                            autoComplete="off"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor='amount'>Amount</label>
                    <p>{amount}</p>
                </div>
                <button 
                    type='submit'
                    className="mt-5 bg-blue-500 
                        text-white font-bold py-2 px-8 
                        rounded shadow border-2 border-blue-500 
                        hover:bg-transparent hover:text-blue-500
                        transition-all duration-300"
                    onClick={() => setChecked(false)}
                >
                    {isEditing ? "Editing Row Item" : "Add Table Item" }
                    
                </button>
            </form>

            {/* Table items */}
            <table className='mt-5 tsize' width="100%">
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
                                <td className='amount'>{amount}</td>
                                <td>
                                    <button onClick={() => deleteRow(id)}>
                                        <AiOutlineDelete className='text-red-500 font-bold text-xl' />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => editRow(id)}>
                                        <AiOutlineEdit className='text-green-500 font-bold text-xl' />
                                    </button>
                                </td>
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

export default TableForm;