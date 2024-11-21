import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuButtonTracker = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    const navBarLinks = (
        <div className="md:space-x-5 p-2 text-gray-900">
            <div href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-800"><NavLink to="/">Home</NavLink></div>
            <div href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-800"><NavLink to="/about">About Me</NavLink></div>
            <div href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-800"><NavLink to="/project">Projects</NavLink></div>
            <div href="#" className="block md:inline transition duration-300 ease-in-out hover:text-cyan-800">Contact</div>
        </div>
    );

    return (
        <nav className="bg-blue-gray-200 px-5 md:px-10 py-4">
            <div className="flex flex-wrap lg:container lg:mx-auto justify-between items-center">
                <div className=" border-gray-800 rounded-xl">
                    <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tighter text-gray-900 font-semibold"><Link to="/">SupunTharaka</Link></h1>
                </div>
                <div className="hidden md:block md:text-xl lg:text-2xl font-semibold">
                    {navBarLinks}
                </div>

                <div className="md:hidden border border-black flex p-1 rounded-lg">
                    <button onClick={menuButtonTracker}>
                        <IoMdMenu className="text-2xl" />
                    </button>
                </div>
            </div>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
            >
                <div className="bg-blue-gray-100 mt-2 p-2 rounded-lg font-semibold">
                    {navBarLinks}
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
