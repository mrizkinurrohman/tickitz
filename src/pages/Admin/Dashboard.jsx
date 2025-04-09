import React from "react";
import HeaderAdmin2 from "../../components/Header/HeaderAdmin2";
import Graph from "../../assets/picture/grap.png";

function DashboardGraph() {
    return (
        <div>
            <HeaderAdmin2 />
            <section className="px-[10%] py-10 bg-[#F2F2F2] flex flex-col gap-5">
                <div className="bg-white">
                    <div className="flex flex-col gap-5 p-5">
                        <h3>Sales Chart</h3>
                        <div className="flex flex-col gap-5 md:flex md:flex-row md:gap-5">
                            <div className="md:w-50">
                                <select
                                    name=""
                                    id=""
                                    className="py-2 bg-gray-300 w-full rounded-sm px-3"
                                >
                                    <option value="">Movie Name</option>
                                </select>
                            </div>
                            <div className="md:w-50">
                                <select
                                    name=""
                                    id=""
                                    className="py-2 bg-gray-300 w-full rounded-sm px-3"
                                >
                                    <option value="">Weekly</option>
                                </select>
                            </div>
                            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-sm md:w-50">
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 gap-8">
                        <p>Avengers: End Game</p>
                        <img src={Graph} alt="" className="" />
                    </div>
                </div>
                <div className="bg-white">
                    <div className="flex flex-col gap-5 p-5">
                        <h3>Ticket Sales </h3>
                        <div className="flex flex-col gap-5 md:flex md:flex-row md:gap-5">
                            <div className="md:w-50">
                                <select
                                    name=""
                                    id=""
                                    className="py-2 bg-gray-300 w-full rounded-sm px-3"
                                >
                                    <option value="" cl>Category</option>
                                </select>
                            </div>
                            <div className="md:w-50">
                                <select
                                    name=""
                                    id=""
                                    className="py-2 bg-gray-300 w-full rounded-sm px-3"
                                >
                                    <option value="">Location</option>
                                </select>
                            </div>
                            <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-sm md:w-50">
                                Filter
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col p-5 gap-8">
                        <p>Avengers: End Game</p>
                        <img src={Graph} alt="" className="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DashboardGraph;
