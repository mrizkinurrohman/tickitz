import gambar from "../../assets/svg/logoblue.svg";
import Hamburger from "../../assets/svg/hamburger.svg";
import { useState } from "react";
import IconDropdown from "../../assets/svg/dropdown.svg";
import IconSearch from "../../assets/svg/search.svg";
import Profile from "../../assets/picture/profile.png";
import { Link } from "react-router";

function HeaderAdmin2() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/* className=" border-b-1 border-black sticky top-0 bg-white z-10" */}
            <header className="border-b-1 border-slate-200 sticky top-0 bg-white z-30">
                <nav className="flex flex-col items-center gap-5 py-[22px] px-[10%] md:items-center md:justify-between md:flex-row md:px-[-5%]">
                    {/* // logo */}
                    <div className="flex w-full justify-between items-center md:w-auto">
                        <img src={gambar} alt="Tickitz" />
                        <button
                            className="md:hidden flex justify-end bg-none"
                            onClick={toggleMenu}
                        >
                            <img
                                src={Hamburger}
                                alt="hamburger menu"
                                className="md:hidden"
                            />
                        </button>
                    </div>
                    {/* nav link */}
                    <div
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } md:flex md:items-center md:gap-6 flex-col gap-3 md:flex-row text-center`}
                    >
                        <Link
                            to="/movie"
                            className="hover:bg-amber-400 inline-block"
                        >
                            Home
                        </Link>
                        <Link to="/admin">Movie</Link>
                    </div>
                    {/* nav button */}
                    <div
                        className={`${
                            isOpen ? "flex" : "hidden"
                        } hidden gap-2 md:flex md:items-center w-full md:gap-6 flex-col md:flex-row text-center md:w-auto`}
                    >
                        <p>Location</p>
                        <img src={IconDropdown} alt="dropdown" />
                        <img src={IconSearch} alt="search" />
                        <div>
                            <img src={Profile} alt="profile" />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default HeaderAdmin2;
