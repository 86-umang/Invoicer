import React from 'react';

function HeaderComponent(props) {

    const handleLogout = () => {
        localStorage.clear()
        window.location.reload(true);
    }

    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-teal-500 pb-5 pl-6 md:pl-20 bg-gray-300">
                <div className="w-full block flex-grow flex items-center w-auto">
                    <div className="flex-grow">
                        <a href="/home" className="block mt-4 inline-block mt-0 text-teal-200 hover:text-blue-800 mr-10">
                            <span className="font-bold text-xl">SK Dairy</span>
                        </a>
                        <a href="/home" className="active font-bold block mt-4 inline-block mt-0 text-teal-200 hover:text-blue-800 mr-4">
                            Home
                        </a>
                        <a href="/report" className="font-bold block mt-4 inline-block mt-0 text-teal-200 hover:text-blue-800 mr-4">
                            Report
                        </a>
                        <a href="/bills" className="font-bold block mt-4 inline-block mt-0 text-teal-200 hover:text-blue-800 mr-4">
                            Bills
                        </a>
                        <button 
                            onClick={handleLogout}
                            type="button" 
                            title="Logout" 
                            className="navbtn font-bold block mt-4 inline-block mt-0 text-teal-200 mr-4
                                bg-red-800 text-white px-2 rounded shadow border-2 border-red-800 hover:bg-transparent hover:text-red-800 transition-all duration-300">
                            <i className="fa-solid fa-right-from-bracket"></i> 
                            <span className='log'> Logout</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent;