import React from 'react';
import {companies} from './companies';
import '../styles/Report.css';

function Report() {
    
    return (
        <div>
            {companies.map((company) => (
                <div className="md:inline-block">
                    <div key={company.id} className="m-5 inline-block">
                        <a href={`/report/${company.id}`}>
                            <h1
                                className="bneon"
                                >
                                    {company.title}
                            </h1>
                        </a>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default Report;