import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";

function App() {

    const [showInvoice, setShowInvoice] = useState(false);
    const [checked, setChecked] = useState(false);
    const [checkedAddress, setCheckedAddress] = useState(false);
    const [name, setName] = useState("Kanubhai Patel");
    const [address, setAddress] = useState("Shop No - 7 Mini Shopping Centre Main Bazar Near Old Police Chowki, Nandesari, Vadodara, Gujarat 391340");
    const [phone, setPhone] = useState("+91 9426522348");
    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [invoiceDate, setInvoiceDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [notes, setNotes] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [amount, setAmount] = useState("");
    const [list, setList] = useState([]);
    const [total, setTotal] = useState(0);

    const componentRef = useRef();
    
    return (
        <>
            <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
                {showInvoice ? 
                    <>
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
                        <div ref={componentRef} className="p-5 pt-7 border-b-2 border-t-2 border-l-2 border-r-2 border-gray-500 mt-5 mr-5 ml-5">
                            <Header/>

                            <MainDetails name={name} address={address} />

                            <ClientDetails clientName={clientName} clientAddress={clientAddress}/>

                            <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

                            <Table 
                                description={description}
                                quantity={quantity}
                                price={price}
                                amount={amount}
                                list={list} 
                                setList={setList}
                                total={total}
                                setTotal={setTotal}
                            />

                            <Notes notes={notes} />

                            <Footer name={name} phone={phone} />

                        </div>
                        <button
                            onClick={() => setShowInvoice(false)} 
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
                                            onChange={(e) => setClientName(e.target.value)}
                                        >
                                            <option disabled value="">--Select Company--</option>
                                            <option>Alindra Pharma Chem.</option>
                                            <option>Annapurna Hospitality</option>
                                            <option>Coromandal International Limited</option>
                                            <option>Creative Caterers</option>
                                            <option>Deep Darshan Chemicals Ltd.</option>
                                            <option>Hari-orgo Chem. Pvt. Ltd.</option>
                                            <option>Harsiddhi Organic</option>
                                            <option>Jyoti Engineering Enterprise</option>
                                            <option>Maruti Chemicals</option>
                                            <option>NTP Tar Product Ltd.</option>
                                            <option>Nandesari Water Utility Ltd.</option>
                                            <option>Organo Metalic</option>
                                            <option>Paragon Enterprise Industries</option>
                                            <option>Puspak Organic</option>
                                            <option>Qualikem Fine Chem. Pvt. Ltd.</option>
                                            <option>Rekon Distributor</option>
                                            <option>Rubamin Private Limited</option>
                                            <option>Sashi Catering</option>
                                            <option>Simalin Chemicals</option>
                                            <option>Sujag Fine Chem.</option>
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
                                            type="text" 
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
                                        price={price} setPrice={setPrice}
                                        amount={amount} setAmount={setAmount} 
                                        list={list} setList={setList}
                                        total={total} setTotal={setTotal}
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

export default App;