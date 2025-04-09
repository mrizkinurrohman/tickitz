import logo from "../../assets/svg/logo.svg";
import fb from "../../assets/svg/fb.svg";
import google from "../../assets/svg/google.svg";
// import eye from "../../assets/svg/eye.svg";
import hide from "../../assets/picture/hide.png";
import view from "../../assets/picture/view.png";
import { useState } from "react";
import { useNavigate } from "react-router";

function Register() {
    // console.log("logo; ", logo);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const eyeIcon = showPassword ? view : hide;
    const TogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "") {
            setErrorEmail("Email is required");
            setSuccessMessage("");
            return;
        }
        if (password === "") {
            setErrorPassword("Password is required");
            setSuccessMessage("");
            return;
        }
        if (!email.includes("@")) {
            setErrorEmail("Email is not valid");
            setSuccessMessage("");
            return;
        }
        if (email.indexOf("@") <= 0) {
            setErrorEmail("Email is not valid");
            setSuccessMessage("");
            return;
        }
        if (password.length < 6) {
            setErrorPassword("Password must be at least 6 characters");
            setSuccessMessage("");
            return;
        }
        setErrorEmail("");
        setErrorPassword("");
        setSuccessMessage("ResgisterSuccess");

        setTimeout(() => {
            navigate("/auth");
        }, 2000);
    };

    return (
        <>
            <main className="bg-[url(/bg.png)] h-screen max-sm:bg-cover flex justify-center">
                <div className="flex flex-col justify-center p-10 md:w-lg">
                    <section className="flex justify-center">
                        <img src={logo} alt="Tickitz" width={200} />
                    </section>
                    <section className="bg-white flex flex-col p-6 rounded-2xl gap-3">
                        <div className="flex gap-1 items-center justify-evenly">
                            <div className="flex flex-col justify-around items-center">
                                <div className="bg-gray-400 text-white rounded-full p-5 flex items-center justify-center w-8 h-8">
                                    <p>1</p>
                                </div>
                                <p>Fill Form</p>
                            </div>
                            <div className="w-20 border-t-2 border-dashed border-gray-400">
                                <span></span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="bg-gray-400 text-white rounded-full p-5 flex items-center justify-center w-8 h-8">
                                    <p>2</p>
                                </div>
                                <p>Activate</p>
                            </div>
                            <div className="w-20 border-b-2 border-dashed border-gray-400">
                                <span></span>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="bg-gray-400 text-white rounded-full p-5 flex items-center justify-center w-8 h-8">
                                    <p>3</p>
                                </div>
                                <p>Done</p>
                            </div>
                        </div>
                        <form
                            className="flex flex-col gap-2"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your Email"
                                    className="border-gray-400"
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>
                            {errorEmail && (
                                <p className="text-red-500">{errorEmail}</p>
                            )}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password">Password</label>
                                <div className="flex border-1 border-black rounded-sm justify-between items-center">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Enter You Password"
                                        className="border-none w-full outline-none"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                    <img
                                        src={eyeIcon}
                                        alt="eye"
                                        className="flex px-2cursor-pointer w-5 h-5 mr-4"
                                        onClick={TogglePassword}
                                    />
                                </div>
                                {errorPassword && (
                                    <p className="text-red-500">
                                        {errorPassword}
                                    </p>
                                )}
                            </div>
                            <div className="flex gap-1">
                                <input type="checkbox" />
                                <p>I agree to Terms & Conditions</p>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-700 cursor-pointer"
                            >
                                Join For Free Now
                            </button>
                            {successMessage && (
                                <p className="text-green-500">
                                    {successMessage}
                                </p>
                            )}
                        </form>
                        <p className="flex justify-center">
                            Already have an account? Log in
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <div className="w-full h-[1px] bg-gray-400"></div>
                            <p>Or</p>
                            <div className="w-full h-[1px] bg-gray-400"></div>
                        </div>
                        <div className="flex gap-3">
                            <a
                                href=""
                                className="w-full bg-white shadow-2xl flex justify-center p-3 gap-2 rounded-sm hover:sky-blue-200"
                            >
                                <img src={google} alt="google" />
                                <p>Google</p>
                            </a>
                            <a
                                href=""
                                className="w-full bg-white shadow-2xl flex justify-center p-3 gap-2 rounded-sm hover:sky-blue-200"
                            >
                                <img src={fb} alt="facebook" />
                                <p>Facebook</p>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Register;
