import React from "react";
import Cinema from "../../../assets/svg/cinema.svg";
import { Link } from "react-router";
import Forward from "../../../assets/svg/Forward.svg";
import ForwardUp from "../../../assets/svg/Forwardup.svg";
import { useState } from "react";

function New() {
    const [show, setShow] = useState(false);
    const iconForward = show ? ForwardUp : Forward;
    const toggleShow = () => {
        setShow(!show);
    };

    return (
        <div>
            <div className="bg-white p-5 flex flex-col gap-10 items-center rounded-2xl md:items-start md:p-10">
                <div className="flex flex-col-reverse justify-between w-[80%] gap-5 border-b-1 border-gray-400 md:flex-row md:w-full">
                    <div className="flex flex-col gap-2 pb-9">
                        <p className="text-gray-400">
                            Tuesday, 07 July 2020 - 04:30pm
                        </p>
                        <h1 className="font-bold text-lg md:text-2xl">
                            Spider-Man: Homecoming
                        </h1>
                    </div>
                    <div>
                        <img src={Cinema} alt="" className="w-[100px]" />
                    </div>
                </div>
                <div className="flex flex-col gap-5 w-[80%] md:w-full md:flex-row">
                    <div className="flex flex-col gap-2 w-full md:flex-row">
                        <a href="">
                            <button className="bg-[#00BA8833] hover:bg-blue-900 font-bold py-2 px-4 rounded-sm text-[#00BA88]">
                                Ticket in active
                            </button>
                        </a>
                        <a href="">
                            <button className="bg-[#E82C2C33] hover:bg-blue-900 text-[#E82C2C] font-bold py-2 px-4 rounded-sm">
                                Not Paid
                            </button>
                        </a>
                    </div>
                    <div className="w-full text-center md:text-end">
                        <button
                            className="text-blue-700 font-bold flex justify-end items-center gap-2"
                            onClick={toggleShow}
                        >
                            Show Details
                            <img src={iconForward} alt="" />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex flex-col gap-3`}
                    style={{ display: show ? "block" : "none" }}
                >
                    <h3 className="font-bold text-lg">Ticket Information</h3>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400">No. Rekening Virtual :</p>
                        <div className="flex justify-between items-center">
                            <p>12321328913829724</p>
                            <div className="p-2 border-1 border-blue-700 rounded-md">
                                <p className="text-blue-700">Copy</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="text-gray-400">Total Payment</p>
                            <p className="font-bold text-blue-700">$30</p>
                        </div>
                    </div>
                    <p className="text-gray-400">
                        Pay this payment bill before it is due, on June 23,
                        2023. If the bill has not been paid by the specified
                        time, it will be forfeited
                    </p>
                    <button
                        type="button"
                        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-sm"
                    >
                        <Link to="/profile/resultorder">Cek Pembayaran</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default New;
