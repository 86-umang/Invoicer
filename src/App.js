function App() {

    const handlePrint = () => {
        window.print();
    }

    return (
        <>
            <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto bg-white rounded shadow">

                {/* Header */}
                <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
                    <div>
                        <h2 className="font-bold uppercase tracking-wide text-2xl">S.K Dairy and Provision Store</h2>
                    </div>

                    <div>
                        <ul className="flex items-center justify-between flex-wrap">
                            <li>
                                <button onClick={handlePrint}
                                    className="btn btn-print">Print</button>
                            </li>
                            <li>
                                <button
                                    className="btn btn-download">Download</button>
                            </li>
                            <li>
                                <button
                                    className="btn btn-send">Send</button>
                            </li>
                        </ul>
                    </div>
                </header>
                {/* End of header */}

                {/* Your details */}
                <section className="flex flex-col items-end justify-end" >
                    <h2 className="text-xl uppercase">Kanubhai Patel</h2>
                    <p>Your Address</p>
                </section>
                {/* End of your details */}

                {/* Client details */}
                <section className="mt-5">
                    <h2 className="text-xl uppercase">Client's Name</h2>
                    <p>Client's Address</p>
                </section>
                {/* End of client details */}

                {/* Dates */}
                <article className="my-5 flex items-end justify-end">
                    <ul>
                        <li><span className="font-bold">Invoicer number: </span></li>
                        <li><span className="font-bold">Invoice date: </span></li>
                        <li><span className="font-bold">Due date: </span></li>
                    </ul>
                </article>
                {/* End of dates */}

                {/* Table */}
                <div className="my-5">this is a table.</div>
                {/* End of table */}

                {/* notes */}
                <section className="mb-5">
                    {/* Textarea */}
                    <p>Notes to the client...</p>
                </section>
                {/* End of notes */}

                {/* Footer */}
                <footer>
                    <ul className="table m-auto">
                        <li>
                            <span className="font-bold">Your name: </span>Kanubhai Manilal Patel
                        </li>
                        <li>
                            <span className="font-bold">Phone number: </span>+91 9426522348
                        </li>
                    </ul>
                </footer>
                {/* End of footer */}
            </main>
        </>
    );
}

export default App;