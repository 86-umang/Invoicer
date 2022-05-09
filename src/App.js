import { useState } from "react";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import Notes from "./components/Notes";
import Table from "./components/Table";

function App() {

    const [showInvoice, setShowInvoice] = useState(false);
    const [name, setName] = useState("Kanubhai Patel");
    const [address, setAddress] = useState("Shop No - 7 Mini Shopping Centre Main Bazar Near Old Police Chowki, Nandesari, Vadodara, Gujarat 391340");
    const [phone, setPhone] = useState("+91 9426522348");
    const [clientName, setClientName] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [invoiceNumber, setInvoiceNumber] = useState("");
    const [invoiceDate, setInvoiceDate] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [notes, setNotes] = useState("");

    const handlePrint = () => {
        window.print();
    }

    return (
        <>
            <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white rounded shadow">
                {showInvoice ? 
                    <div>
                        <Header handlePrint={handlePrint}/>

                        <MainDetails name={name} address={address} />

                        <ClientDetails clientName={clientName} clientAddress={clientAddress}/>

                        <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />

                        <Table />

                        <Notes notes={notes} />

                        <Footer name={name} phone={phone} />

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
                    </div> : (
                        <>
                        {/* name, address, phone, client name, client address, 
                        invoice number, invoice date, due date, notes */}
                            <div className="flex flex-col justify-center">
                                <label htmlFor="name">Enter your name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Enter your name"
                                    autocomplete="off"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <label htmlFor="address">Enter your address</label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    id="address" 
                                    placeholder="Enter your address"
                                    autocomplete="off"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                <label htmlFor="phone">Enter your phone number</label>
                                <input 
                                    type="text" 
                                    name="phone" 
                                    id="phone" 
                                    placeholder="Enter your phone number"
                                    autocomplete="off"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />

                                <label htmlFor="clientName">Select your client's name</label>
                                <select
                                    id="clientName"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                >
                                    <option selected disabled value="">--Select Company--</option>
                                    <option>Company 1</option>
                                    <option>Company 2</option>
                                    <option>Company 3</option>
                                    <option>Company 4</option>
                                </select>

                                <strong>If your client's name is not in above list then type your client's name below.</strong>
                                <label htmlFor="clientName1">Enter your client's name</label>
                                <input 
                                    type="text" 
                                    name="clientName1" 
                                    id="clientName1" 
                                    placeholder="Enter your client's name"
                                    autocomplete="off"
                                    value={clientName}
                                    onChange={(e) => setClientName(e.target.value)}
                                />

                                <label htmlFor="clientAddress">Select your client's address</label>
                                <select
                                    id="clientAddress"
                                    value={clientAddress}
                                    onChange={(e) => setClientAddress(e.target.value)}
                                >
                                    <option selected disabled value="">--Select Address--</option>
                                    <option>GIDC Nandesari</option>
                                    <option>Anagadh</option>
                                    <option>Rupapura</option>
                                    <option>Damapura</option>
                                    <option>Ranoli</option>
                                </select>

                                <strong>If your client's address is not in above list then type your client's address below.</strong>
                                <label htmlFor="clientAddress1">Enter your client's address</label>
                                <input 
                                    type="text" 
                                    name="clientAddress1" 
                                    id="clientAddress1" 
                                    placeholder="Enter your client's Address"
                                    autocomplete="off"
                                    value={clientAddress}
                                    onChange={(e) => setClientAddress(e.target.value)}
                                />

                                <label htmlFor="invoiceNumber">Invoice Number</label>
                                <input 
                                    type="text" 
                                    name="invoiceNumber" 
                                    id="invoiceNumber" 
                                    placeholder="Invoice Number"
                                    autocomplete="off"
                                    value={invoiceNumber}
                                    onChange={(e) => setInvoiceNumber(e.target.value)}
                                />

                                <label htmlFor="invoiceDate">Invoice Date</label>
                                <input 
                                    type="date" 
                                    name="invoiceDate" 
                                    id="invoiceDate" 
                                    placeholder="Invoice Date"
                                    autocomplete="off"
                                    value={invoiceDate}
                                    onChange={(e) => setInvoiceDate(e.target.value)}
                                />

                                <label htmlFor="dueDate">Due Date</label>
                                <input 
                                    type="date" 
                                    name="dueDate" 
                                    id="dueDate" 
                                    placeholder="Due Date"
                                    autocomplete="off"
                                    value={dueDate}
                                    onChange={(e) => setDueDate(e.target.value)}
                                />

                                <label htmlFor="notes">Additional Notes</label>
                                <textarea
                                    name="notes" 
                                    id="notes" 
                                    cols="30"
                                    rows="10"
                                    placeholder="Additional notes to the clients"
                                    autocomplete="off"
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