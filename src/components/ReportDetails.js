import React from 'react';
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from 'firebase/firestore';
import db from '../firebase';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/ReportDetails.css'

function ReportDetails() {

const [dataList, setDataList] = useState([]);

    const {id} = useParams();
    
    useEffect (() => {
        const q = query(collection(db, 'clients'), where("clientId", "==", id))
        getDocs(q)
        .then((snapshot) => {
            setDataList(snapshot.docs.map(doc => doc.data()))
        })
    },[setDataList, id])

    // Sort the list by Invoice Date
    const myData = [].concat(dataList).sort((a, b) => a.invoiceDate > b.invoiceDate ? -1 : 1)
    
    return (
        <div className="md:text-xl">
            {myData.map(({clientId, clientName, clientAddress, invoiceNumber, invoiceDate, dueDate, total, word, list}) => (
                <React.Fragment key={clientId}>
                    <div className="m-5 mb-10 p-5 md:max-w-2xl md:mx-auto lg:max-w-4xl xl:max-w-6xl bg-white rounded shadow box">
                        <p><strong>Company: </strong>{clientName}</p>
                        <p><strong>Address: </strong>{clientAddress}</p>
                        <p><strong>Invoice Number: </strong>{invoiceNumber}</p>
                        <p><strong>Invoice Date: </strong>{invoiceDate}</p>
                        <p><strong>Due Date: </strong>{dueDate}</p>
                        <p><strong>Total: </strong>{total}</p>
                        <p><strong>Total (in word): </strong>{word}</p>
                        <div className="cardgrid">
                            {list.map(({id, description, quantity, unit, price, amount }) => (
                                <React.Fragment key={id}>
                                    <div className="m-5 p-5 rounded shadow box1">
                                        <h1><strong>Item: </strong>{description}</h1>
                                        <h1><strong>Quantity: </strong>{quantity}</h1>
                                        <h1><strong>Unit: </strong>{unit}</h1>
                                        <h1><strong>Rate: </strong>{price}</h1>
                                        <h1><strong>Amount: </strong>{amount}</h1>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
}

export default ReportDetails;

