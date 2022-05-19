import React from 'react';
import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import ClientDetails from "./ClientDetails";
import Dates from "./Dates";
import Footer from "./Footer";
import Header from "./Header";
import MainDetails from "./MainDetails";
import Notes from "./Notes";
import Table from "./Table";
import TableForm from "./TableForm";
import '../index.css'

import db from "../firebase";
import {collection, addDoc} from 'firebase/firestore'

function Home() {

    const [showInvoice, setShowInvoice] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkedAddress, setCheckedAddress] = useState(false);
    const [name, setName] = useState("Kanubhai Patel");
    const [address, setAddress] = useState("Shop No - 7 Mini Shopping Centre Main Bazar Near Old Police Chowki, Nandesari, Vadodara, Gujarat 391340");
    const [phone, setPhone] = useState("+91 9426522348");
    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [clientId, setClientId] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [invoiceDate, setInvoiceDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [notes, setNotes] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [unit, setUnit] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);
    const [word, setWord] = useState("");
    const [print, setPrint] = useState(false);

    const componentRef = useRef();

    // const handleOnSubmit = async(e) => {
    //     e.preventDefault();

    //     const result = await fetch(
    //     '/', {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ clientName, clientAddress }),
    //     });

    //     result = await result.json();
    //     console.warn(result);
    //     if (result) {
    //         alert("Data saved succesfully");
    //     }
    //     setPrint(true)
    // }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (!clientName || !clientAddress || !invoiceNumber || !invoiceDate || !dueDate || !total ) {
            alert("Please fill in all inputs")
        } else {
            addDoc(collection(db,'clients'),{
                clientName: clientName,
                clientId: clientId, 
                clientAddress: clientAddress, 
                invoiceNumber: invoiceNumber, 
                invoiceDate: invoiceDate, 
                dueDate: dueDate, 
                list: list, 
                total: total, 
                word: word
            })
            .then(() => {
                alert('Data saved succesfully');
            })
            .then(() => setPrint(true))
            .catch(error => {
                alert(error.message);
            })
        }
    }

    return (
        <>
            <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow box">
                {showInvoice ? 
                    <>
                        {print ? 
                            <ReactToPrint 
                                trigger={() => 
                                    <button className="bg-blue-500
                                        text-white font-bold py-2 px-8 
                                        rounded shadow border-2 border-blue-500 
                                        hover:bg-transparent hover:text-blue-500
                                        transition-all duration-300">
                                            Print / Download
                                    </button>
                                }
                                content={() => componentRef.current}
                                documentTitle= {clientName}
                            />
                            : (
                                <button
                                onClick={handleOnSubmit} 
                                className="bg-green-500 
                                text-white font-bold py-2 px-8 
                                rounded shadow border-2 border-green-500 
                                hover:bg-transparent hover:text-green-500
                                transition-all duration-300"
                                >
                                    Submit
                                </button>
                            )
                        }
                        <div ref={componentRef} className="p-5 pt-7 border-b-2 border-t-2 border-l-2 border-r-2 border-gray-500 mt-5 mr-5 ml-5">
                            <Header/>

                            <MainDetails name={name} address={address} />

                            <ClientDetails clientName={clientName} clientAddress={clientAddress}/>

                            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

                            <Table 
                                description={description}
                                quantity={quantity}
                                unit={unit}
                                price={price}
                                amount={amount}
                                list={list} 
                                setList={setList}
                                total={total}
                                setTotal={setTotal}
                                word={word}
                            />

                            <Notes notes={notes} />

                            <Footer name={name} phone={phone} />

                        </div>
                        <button
                            onClick={() => (setShowInvoice(false), setPrint(false))} 
                            className="mt-5 bg-blue-500 
                            text-white font-bold py-2 px-8 
                            rounded shadow border-2 border-blue-500 
                            hover:bg-transparent hover:text-blue-500
                            transition-all duration-300"
                        >
                            Edit Information
                        </button>
                    </> : (
                        <>
                            <div className="flex flex-col justify-center">
                                <article className="gird-items gap-10">
                                    <div className="flex flex-col">
                                        <label htmlFor="name">Enter your name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            id="name" 
                                            placeholder="Enter your name"
                                            autoComplete="off"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="phone">Enter your phone number</label>
                                        <input 
                                            type="text" 
                                            name="phone" 
                                            id="phone" 
                                            placeholder="Enter your phone number"
                                            autoComplete="off"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                </article>

                                <label htmlFor="address">Enter your address</label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    id="address" 
                                    placeholder="Enter your address"
                                    autoComplete="off"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                {!checked ?
                                    <>
                                        <label className="mt-16" htmlFor="clientName">Select your client's name</label>
                                        <select
                                            id="clientName"
                                            value={clientName}
                                            onChange={(e) => (setClientName(e.target.value), setClientId(e.target.childNodes[e.target.selectedIndex].getAttribute('id')))}
                                        >
                                            <option disabled value="">--Select Company--</option>
                                            <option id="1">Alindra Pharma Chem.</option>
                                            <option id="2">Annapurna Hospitality</option>
                                            <option id="3">Coromandal International Limited</option>
                                            <option id="4">Creative Caterers</option>
                                            <option id="5">Deep Darshan Chemicals Ltd.</option>
                                            <option id="6">Hari-orgo Chem. Pvt. Ltd.</option>
                                            <option id="7">Harsiddhi Organic</option>
                                            <option id="8">Jyoti Engineering Enterprise</option>
                                            <option id="9">Maruti Chemicals</option>
                                            <option id="10">NTP Tar Product Ltd.</option>
                                            <option id="11">Nandesari Water Utility Ltd.</option>
                                            <option id="12">Organo Metalic</option>
                                            <option id="13">Paragon Enterprise Industries</option>
                                            <option id="14">Puspak Organic</option>
                                            <option id="15">Qualikem Fine Chem. Pvt. Ltd.</option>
                                            <option id="16">Rekon Distributor</option>
                                            <option id="17">Rubamin Private Limited</option>
                                            <option id="18">Sashi Catering</option>
                                            <option id="19">Simalin Chemicals</option>
                                            <option id="20">Sujag Fine Chem.</option>
                                        </select>
        
                                    </>
                                    : (
                                        <>
                                            <label className="mt-16" htmlFor="clientName1">Enter your client's name</label>
                                            <input 
                                                type="text" 
                                                name="clientName1" 
                                                id="clientName1" 
                                                placeholder="Enter your client's name"
                                                autoComplete="off"
                                                value={clientName}
                                                onChange={(e) => setClientName(e.target.value)}
                                            />
                                        </>
                                    )    
                                }
                                
                                <div className="line">
                                    <input 
                                        type="checkbox"
                                        checked={checked}
                                        onChange={() => setChecked(!checked)}
                                    />
                                    <label className="p-2 font-normal" htmlFor="check">Check the box if your client's name is not in above list then type your client's name above.</label>
                                </div>

                                
                                {!checkedAddress ?
                                    <>
                                        <label className="mt-5" htmlFor="clientAddress">Select your client's address</label>
                                        <select
                                            id="clientAddress"
                                            value={clientAddress}
                                            onChange={(e) => setClientAddress(e.target.value)}
                                        >
                                            <option disabled value="">--Select Address--</option>
                                            <option>GIDC Nandesari</option>
                                            <option>Paragon Enterprise Industries, 27 GIDC Nandesari, Vadodara, GST IN: 24ABAFP4316M129</option>
                                            <option>Rubamin Private Limited, GIDC Nandesari, 17 number, GST IN: 24AAACR8758H124</option>
                                            <option>Rubamin Private Limited, GIDC Nandesari, 100 number, GST IN: 24AAACR8758H124</option>
                                            <option>Anagadh</option>
                                            <option>Rupapura</option>
                                            <option>Damapura</option>
                                            <option>Ranoli</option>
                                        </select>
                                    </>
                                    : (
                                        <>
                                            <label htmlFor="clientAddress1">Enter your client's address</label>
                                            <input 
                                                type="text" 
                                                name="clientAddress1" 
                                                id="clientAddress1" 
                                                placeholder="Enter your client's Address"
                                                autoComplete="off"
                                                value={clientAddress}
                                                onChange={(e) => setClientAddress(e.target.value)}
                                            />
                                        </>
                                    )
                                }

                                <div className="line">
                                    <input 
                                        type="checkbox"
                                        checked={checkedAddress}
                                        onChange={() => setCheckedAddress(!checkedAddress)}
                                    />
                                    <label className="p-2 font-normal" htmlFor="check">Check the box if your client's address is not in above list then type your client's address above.</label>
                                </div>
                                
                                <article className="gird-items gap-10 mt-16">
                                    <div className="flex flex-col">
                                        <label htmlFor="invoiceNumber">Invoice Number</label>
                                        <input 
                                            type="number" 
                                            name="invoiceNumber" 
                                            id="invoiceNumber" 
                                            placeholder="Invoice Number"
                                            autoComplete="off"
                                            value={invoiceNumber}
                                            onChange={(e) => setInvoiceNumber(e.target.value)}
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor="invoiceDate">Invoice Date</label>
                                        <input 
                                            type="date" 
                                            name="invoiceDate" 
                                            id="invoiceDate" 
                                            placeholder="Invoice Date"
                                            autoComplete="off"
                                            value={invoiceDate}
                                            onChange={(e) => setInvoiceDate(e.target.value)}
                                        />
                                    </div>
                                </article>

                                <article className="gird-items gap-10">
                                    <div className="flex flex-col">
                                        <label htmlFor="dueDate">Due Date</label>
                                        <input 
                                            type="date" 
                                            name="dueDate" 
                                            id="dueDate" 
                                            placeholder="Due Date"
                                            autoComplete="off"
                                            value={dueDate}
                                            onChange={(e) => setDueDate(e.target.value)}
                                        />
                                    </div>
                                </article>

                                {/* This is our table form */}
                                <article>
                                    <TableForm 
                                        description={description} setDescription={setDescription}
                                        quantity={quantity} setQuantity={setQuantity}
                                        unit={unit} setUnit={setUnit}
                                        price={price} setPrice={setPrice}
                                        amount={amount} setAmount={setAmount} 
                                        list={list} setList={setList}
                                        total={total} setTotal={setTotal}
                                        word={word} setWord={setWord}
                                    />
                                </article>

                                <label className="mt-16" htmlFor="notes">Additional Notes</label>
                                <textarea
                                    name="notes" 
                                    id="notes" 
                                    cols="30"
                                    rows="10"
                                    placeholder="Additional notes to the clients"
                                    autoComplete="off"
                                    value={notes}
                                    onChange={(e) => setNotes(e.target.value)}
                                />

                                <button
                                    onClick={() => setShowInvoice(true)} 
                                    className="bg-blue-500 
                                    text-white font-bold py-2 px-8 
                                    rounded shadow border-2 border-blue-500 
                                    hover:bg-transparent hover:text-blue-500
                                    transition-all duration-300"
                                >
                                    Preview Invoice
                                </button>
                            </div>
                        </>
                    )
                }
                
            </main>    
        </>
    );
}

export default Home;