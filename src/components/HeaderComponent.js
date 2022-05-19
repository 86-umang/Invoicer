import React from 'react';

function HeaderComponent(props) {

    //const [home, setHome] = useState(false);
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
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderComponent;