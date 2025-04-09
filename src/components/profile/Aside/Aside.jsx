import React from "react";
import Profile from "../../../assets/picture/profile.png";
import IconStar from "../../../assets/picture/star.png";
import IconEllipse from "../../../assets/picture/ellipse1.png";
import IconEllipse2 from "../../../assets/picture/ellipse2.png";

const Aside = () => {
    return (
        <div>
            <aside className="bg-white rounded-4xl h-[670px]">
                <div className="border-b-1 border-gray-200">
                    <div className="flex flex-col gap-6 p-10 ">
                        <p className="text-gray-400">INFO</p>
                        <div className="flex flex-col gap-4 items-center">
                            <img src={Profile} alt="" width="100px" />
                            <p className="text-2xl font-medium">
                                Jonas El Rodriguez
                            </p>
                            <p className="text-gray-400">Moviegoers</p>
                        </div>
                    </div>
                </div>
                <div className="mt-5 p-10 flex flex-col gap-7">
                    <p className="text-gray-400 text-lg">Loyalty Points</p>
                    <div className="bg-blue-700 h-[130px] w-[248px] rounded-2xl flex flex-col p-2 gap-7 ">
                        <div className="flex justify-between items-center text-white font-bold text-2xl">
                            <p>Moviegoers</p>
                            <img
                                src={IconStar}
                                alt="star"
                                width={50}
                                className="z-10"
                            />
                        </div>
                        <div className="flex text-white gap-1 items-end">
                            <p className="text-2xl">320</p>
                            <p>points</p>
                        </div>
                        <img
                            src={IconEllipse}
                            alt=""
                            className="relative -top-50 left-40"
                            width={150}
                        />
                        <img
                            src={IconEllipse2}
                            alt=""
                            className="relative -top-85 left-35"
                            width={150}
                        />
                    </div>
                    <div>
                        <p className="">180 points become a master</p>
                        <div>
                            <div className="w-full h-5 bg-blue-700 rounded-2xl"></div>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-10">
                    <button
                        type="submit"
                        className="p-2 border-1 border-blue-700 text-blue-700 rounded-2xl font-bold md:hidden"
                    >
                        Edit Profile
                    </button>
                </div>
            </aside>
        </div>
    );
};

export default Aside;
