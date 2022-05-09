import React from 'react';

function Footer({name, phone}) {
    return (
        <>
            <footer className="footer border-t-2 border-gray-300 pt-5">
                <ul className="table m-auto">
                    <li>
                        <span className="font-bold">Name: </span>{name}
                    </li>
                    <li>
                        <span className="font-bold">Phone number: </span>{phone}
                    </li>
                </ul>
            </footer>
        </>
    );
}

export default Footer;