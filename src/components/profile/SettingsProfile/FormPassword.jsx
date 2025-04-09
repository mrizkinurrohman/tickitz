import React from "react";
import IconEye from "../../../assets/svg/eye.svg";

const FormPassword = () => {
    return (
        <div>
            <div className="flex flex-col gap-3 md:rounded-2xl md:bg-white p-5 md:gap-10  md:p-10 ">
                <div>
                    <h4>Account and Privacy</h4>
                </div>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                    <div className="flex flex-col gap-3">
                        <label htmlfor="password">New Password</label>
                        <div className="flex border-1 border-gray-400 rounded-lg py-2 justify-between pr-5">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                                className="border-none outline-none"
                            />
                            <img src={IconEye} alt="password" width="20px" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlfor="confirm">Confirm Password</label>
                        <div className="flex border-1 border-gray-400 rounded-lg justify-between pr-5 py-2">
                            <input
                                type="password"
                                name="password"
                                id="confirm"
                                placeholder="Enter your password"
                                className="border-none outline-none"
                            />
                            <img src={IconEye} alt="password" width="20px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormPassword;
