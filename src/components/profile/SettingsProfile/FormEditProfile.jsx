import React from "react";
import IconEye from "../../../assets/svg/eye.svg";
import { useState } from "react";
import { useNavigate } from "react-router";
import hide from "../../../assets/picture/hide.png";
import view from "../../../assets/picture/view.png";
function FormEditProfile() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [errorFirstname, setErrorFirstname] = useState("");
    const [errorLastname, setErrorLastname] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorConfirm, setErrorConfirm] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const eyeIcon = showPassword ? view : hide;
    const eyeIconConfirm = showConfirmPassword ? view : hide;

    const TogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const ToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    };

    const handleLastname = (e) => {
        setLastname(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstname === "") {
            setErrorFirstname("First Name is required");
            setSuccessMessage("");
            return;
        }
        if (lastname === "") {
            setErrorLastname("Last Name is required");
            setSuccessMessage("");
            return;
        }
        if (email === "") {
            setErrorEmail("Email is required");
            setSuccessMessage("");
            return;
        }
        if (!email.includes("@")) {
            setErrorEmail("Email required @");
            setSuccessMessage("");
            return;
        }
        if (email.indexOf("@") === 0) {
            setErrorEmail("First character must be a letter");
            setSuccessMessage("");
            return;
        }
        if (phone === "") {
            setErrorPhone("Phone Number is required");
            setSuccessMessage("");
            return;
        }
        if (phone.length < 11) {
            setErrorPhone("Phone Number min 11 character");
            setSuccessMessage("");
            return;
        }
        if (password === "") {
            setErrorPassword("Password is required");
            setSuccessMessage("");
            return;
        }
        if (password.length < 6) {
            setErrorPassword("Password min 6 character");
            setSuccessMessage("");
            return;
        }
        if (confirm === "") {
            setErrorConfirm("Confirm Password is required");
            setSuccessMessage("");
            return;
        }
        if (confirm.length < 6) {
            setErrorConfirm("Password min 6 character");
            setSuccessMessage("");
            return;
        }
        if (password !== confirm) {
            setErrorPassword("Password doesn't match");
            setErrorConfirm("Password doesn't match");
            return;
        }

        setErrorFirstname("");
        setErrorLastname("");
        setErrorEmail("");
        setErrorPhone("");
        setErrorPassword("");
        setErrorConfirm("");
        setSuccessMessage("Success");

        setTimeout(() => {
            navigate("/profile/editprofile");
        }, 1000);
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-3 md:rounded-2xl md:bg-white p-5 md:gap-10  md:p-10 ">
                    <div>
                        <h4>Details Information</h4>
                    </div>
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="Firstname">First Name</label>
                            <input
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="Jonas"
                                className="border-gray-400 outline-none p-3 rounded-lg"
                                value={firstname}
                                onChange={handleFirstname}
                            />
                            {errorFirstname && (
                                <p className="text-red-500">{errorFirstname}</p>
                            )}
                        </div>

                        <div className="flex flex-col gap-3">
                            <label htmlFor="Lastname">Last Name</label>
                            <input
                                type="text"
                                name="lastname"
                                id="lastname"
                                placeholder="El Rodriguez"
                                className="border-gray-400 outline-none p-3 rounded-lg"
                                value={lastname}
                                onChange={handleLastname}
                            />
                            {errorLastname && (
                                <p className="text-red-500">{errorLastname}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="Email">Email</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email@example.com"
                                className="border-gray-400 outline-none p-3 rounded-lg"
                                value={email}
                                onChange={handleEmail}
                            />
                            {errorEmail && (
                                <p className="text-red-500">{errorEmail}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="">Phone Number</label>
                            <div className="flex border-1 border-gray-400 justify-between px-5 py-2 rounded-lg items-center">
                                <p className="border-r-1 border-gray-400 pr-6">
                                    +62
                                </p>
                                <input
                                    type="number"
                                    name="phone"
                                    id="phone"
                                    placeholder="0812xxxxxxx"
                                    className="border-none w-full outline-none"
                                    value={phone}
                                    onChange={handlePhone}
                                />
                            </div>
                            {errorPhone && (
                                <p className="text-red-500">{errorPhone}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:rounded-2xl md:bg-white p-5 md:gap-10  md:p-10 ">
                    <div>
                        <h4>Account and Privacy</h4>
                    </div>
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5">
                        <div className="flex flex-col gap-3">
                            <label htmlfor="password">New Password</label>
                            <div className="flex border-1 border-gray-400 rounded-lg py-2 justify-between pr-5 items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className="border-none outline-none w-full"
                                    value={password}
                                    onChange={handlePassword}
                                />
                                <img
                                    src={eyeIcon}
                                    alt="password"
                                    className="cursor-pointer w-5 h-5 mr-4"
                                    onClick={TogglePassword}
                                />
                            </div>
                            {errorPassword && (
                                <p className="text-red-500">{errorPassword}</p>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlfor="confirm">Confirm Password</label>
                            <div className="flex border-1 border-gray-400 rounded-lg justify-between pr-5 py-2 items-center">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    id="confirm"
                                    placeholder="Enter your password"
                                    className="border-none outline-none w-full"
                                    value={confirm}
                                    onChange={handleConfirm}
                                />
                                <img
                                    src={eyeIconConfirm}
                                    className="cursor-pointer w-5 h-5 mr-4"
                                    alt="password"
                                    onClick={ToggleConfirmPassword}
                                />
                            </div>
                            {errorConfirm && (
                                <p className="text-red-500">{errorConfirm}</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className="px-5 md:px-10">
                    <a href="">
                        <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-2xl w-[50%]">
                            Update changes
                        </button>
                    </a>
                </div>
                {successMessage && (
                    <p className="text-center text-white font-bold bg-green-200 p-2 rounded-md">
                        {successMessage}
                    </p>
                )}
            </form>
        </div>
    );
}

export default FormEditProfile;
