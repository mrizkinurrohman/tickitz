import React from "react";
import Cinema from "../../../assets/svg/cinema.svg";
import Qr from "../../../assets/picture/QR.png";
import Forward from "../../../assets/svg/Forward.svg";
import { useState } from "react";

function ResultPayment() {
    const [show, setShow] = useState(false);
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
                            <img src={Forward} alt="" />
                        </button>
                    </div>
                </div>
                <div
                    className={`${
                        show ? "block" : "hidden"
                    } flex flex-col gap-3`}
                >
                    <h3 className="font-bold text-lg">Ticket Information</h3>
                    <div className="md:grid md:grid-cols-3">
                        <div>
                            <img src={Qr} alt="" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 md:grid md:grid-cols-3 md:gap-9">
                            <div>
                                <p>Category :</p>
                                <p>PG-13</p>
                            </div>
                            <div>
                                <p>Time :</p>
                                <p>2:00pm</p>
                            </div>
                            <div>
                                <p>Seats :</p>
                                <p>C4, C5, C6</p>
                            </div>
                            <div>
                                <p>Movie :</p>
                                <p>Spider-Man: ..</p>
                            </div>
                            <div class="date">
                                <p>Date :</p>
                                <p>07 Jul</p>
                            </div>
                            <div>
                                <p>Count :</p>
                                <p>3 pcs</p>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="md:text-center md:items-self-center">
                                <p>Total:</p>
                                <p className="font-bold text-2xl">$30.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResultPayment;
