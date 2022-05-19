import React from 'react';

function MainDetails({name, address}) {
    return (
        <>
            <section className="flex flex-col items-end justify-end" >
                <h2 className="text-2xl uppercase font-bold mb-1 md:text-2xl">{name}</h2>
                <p className='text-justify'>{address}</p>
                <hr className="forborder"/>
            </section>
        </>
    );
}

export default MainDetails;