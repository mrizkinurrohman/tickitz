import logo from "../../assets/svg/logo.svg";
import fb from "../../assets/svg/fb.svg";
import google from "../../assets/svg/google.svg";
import hide from "../../assets/picture/hide.png";
import view from "../../assets/picture/view.png";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
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
        setSuccessMessage("Login Success");

        setTimeout(() => {
            navigate("/movie");
        }, 1000);
    };

    return (
        <>
            <main className="bg-[url(/bg.png)] h-screen max-sm:bg-cover flex justify-center">
                <div className="flex flex-col justify-center p-10 md:w-lg">
                    <section className="flex justify-center">
                        <img src={logo} alt="Tickitz" width={200} />
                    </section>
                    <section className="bg-white flex flex-col p-6 rounded-2xl gap-3">
                        <div className="steps">
                            <h1>Welcome Back👋</h1>
                            <p>
                                Sign in with your data that you entered during
                                your registration
                            </p>
                        </div>
                        <form
                            action=""
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
                                <div className="flex border-1 border-gray-400 rounded-sm justify-between items-center">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        name="password"
                                        id="password"
                                        placeholder="Enter You Password"
                                        className="border-none outline-none w-full"
                                        value={password}
                                        onChange={handlePassword}
                                    />
                                    <img
                                        src={eyeIcon}
                                        alt="eye"
                                        className="cursor-pointer w-5 h-5 mr-4"
                                        onClick={TogglePassword}
                                    />
                                </div>
                                {errorPassword && (
                                    <p className="text-red-500">
                                        {errorPassword}
                                    </p>
                                )}
                            </div>
                            <button type="submit" className="bg-blue-700 ">
                                Login
                            </button>
                            {successMessage && (
                                <p className="text-green-500">
                                    {successMessage}
                                </p>
                            )}
                        </form>
                        <p className="flex justify-end">
                            Forgot your password?
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

export default Login;
