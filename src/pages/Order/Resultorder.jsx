import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Hero from "../../../public/bg.png";
import ArrowLeft from "../../assets/svg/arrowwhiteleft.svg";
import Logo from "../../assets/svg/logowhite.svg";
import Qr from "../../assets/picture/QR.png";
import Download from "../../assets/svg/download.svg";
import { Link } from "react-router";

function Resultorder() {
    return (
        <div>
            <Header />
            {/* <Footer /> */}
            <section class="flex flex-col md:flex-row">
                <div className="bg-[url(/bg.png)] h-[90vh] bg-cover flex flex-col justify-center px-6 md:w-[60%] md:flex md:px-10 md:h-[120vh]">
                    <div className="flex flex-col gap-5 text-white">
                        <img
                            src={Logo}
                            alt="icon-tickitz"
                            className="w-[200px] md:w-[300px] "
                        />
                        <h2 className="text-3xl md:text-5xl">
                            Thankyou For Purchasing
                        </h2>
                        <p className="text-md text-gray-400 md:text-xl md:w-lg ">
                            Lorem ipsum dolor sit amet consectetur. Quam pretium
                            pretium tempor integer sed magna et.
                        </p>
                        <div className="flex gap-3">
                            <p>Please Download Your Ticket</p>
                            <img src={ArrowLeft} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F6F8] p-10 md:pt-10 md:px-20 md:pb-0 md:w-[40%]">
                    <div className="bg-white  relative">
                        <div className="w-8 h-8 bg-[#F5F6F8] rounded-full relative top-71 -left-3 "></div>
                        <div className="w-8 h-8 bg-[#F5F6F8] rounded-full relative top-64 left-82 md:left-107 "></div>
                        <div className="flex flex-col gap-6 p-8">
                            <div className="border-b-1 border-gray-200 w-full flex justify-center py-7">
                                <img src={Qr} alt="" width="150px" />
                            </div>
                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Movie</p>
                                    <p>Spider-Man: ..</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Category</p>
                                    <p>PG-13</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Date</p>
                                    <p>07 Jul</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Time</p>
                                    <p>2:00pm</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Count</p>
                                    <p>3 pcs</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Seats</p>
                                    <p>C4, C5, C6</p>
                                </div>
                            </div>
                            <div className="flex mt-2 p-4 border-1 border-gray-200">
                                <p className="text-gray-400 font-bold">
                                    Total :
                                </p>
                                <p className="ml-30 font-bold">$30</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 py-2 px-8">
                            <div className="flex border-1 border-blue-700 p-1 px-10 rounded-md">
                                <img src={Download} alt="icon-download" />
                                <button className="text-blue-700" type="button">
                                    Download
                                </button>
                            </div>
                            <div className="flex bg-blue-700 p-1 px-10 rounded-md hover:cursor-pointer">
                                <button
                                    className="text-white w-full"
                                    type="button"
                                >
                                    <Link to="/profile">Done</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Resultorder;
