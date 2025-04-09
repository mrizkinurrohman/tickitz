import React from "react";

function Step() {
    return (
        <div>
            <section className="hidden md:flex md:justify-center md:gap-5">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center">
                        <p className="text-white">1</p>
                    </div>
                    <p>Date</p>
                </div>
                <div className="border-b-2 border-dashed border-gray-400 w-15 h-5 "></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center">
                        <p className="text-white">2</p>
                    </div>
                    <p>Seat</p>
                </div>
                <div className="border-b-2 border-dashed border-gray-400 w-15 h-5"></div>
                <div className="flex flex-col justify-center items-center">
                    <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center">
                        <p className="text-white">3</p>
                    </div>
                    <p>Payment</p>
                </div>
            </section>
        </div>
    );
}

export default Step;
