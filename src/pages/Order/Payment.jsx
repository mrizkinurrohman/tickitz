import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Step from "../../components/Steps/Step.jsx";
import Gpay from "../../assets/svg/gpay.svg";
import Visa from "../../assets/svg/visa.svg";
import BRI from "../../assets/svg/bri.svg";
import BCA from "../../assets/svg/bca.svg";
import Dana from "../../assets/svg/dana.svg";
import Paypal from "../../assets/svg/paypal.svg";
import OVO from "../../assets/svg/ovo.svg";
import Gopay from "../../assets/svg/gopay.svg";
import { useState } from "react";
import { Link } from "react-router";

function Payment() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [errorUser, setErrorUser] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPhone, setErrorPhone] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [showModal, setShowModal] = useState(false);


    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "") {
            setErrorUser("Username is required");
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
            setErrorPhone("Number is required");
            setSuccessMessage("");
            return;
        }
        if (phone.length > 12) {
            setErrorPhone("Number max 13 character");
            setSuccessMessage("");
            return;
        }

        setErrorUser("");
        setErrorEmail("");
        setErrorPhone("");
        setSuccessMessage("Success");
        setShowModal(true); // show modal
    };

    return (
        <div>
            <Header />
            <main className="flex flex-col gap-10 bg-gray-200 md:py-[31px] md:px-[131px] items-center relative">
                <Step />
                <section className="bg-white flex flex-col w-[70%] rounded-lg p-5">
                    <div className="flex flex-col gap-5">
                        <h3 className="text-2xl font-bold mb-5">
                            Payment Info
                        </h3>
                        <div className="flex flex-col gap-3 border-b-1 border-gray-200 pb-5">
                            <h5 className="text-gray-400">DATE & TIME</h5>
                            <p>Tuesday, 07 July 2020 at 02:00pm</p>
                        </div>
                        <div className="flex flex-col gap-3 border-b-1 border-gray-200 pb-5">
                            <h5 className="text-gray-400">MOVIE TITLE</h5>
                            <p>Spider-Man: Homecoming</p>
                        </div>
                        <div className="flex flex-col gap-3 border-b-1 border-gray-200 pb-5">
                            <h5 className="text-gray-400">CINEMA NAME</h5>
                            <p>CineOne21 Cinema</p>
                        </div>
                        <div className="flex flex-col gap-3 border-b-1 border-gray-200 pb-5">
                            <h5 className="text-gray-400">NUMBER OF TICKETS</h5>
                            <p>3 pieces</p>
                        </div>
                        <div className="flex flex-col gap-3 border-b-1 border-gray-200 pb-5">
                            <h5 className="text-gray-400">TOTAL PAYMENT</h5>
                            <p>$30,00</p>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-7"
                    >
                        <section class="form-content">
                            <h3 className="text-2xl font-bold mb-5">
                                Personal Infomartion
                            </h3>
                            <div className="flex flex-col gap-2 text-gray-400">
                                <label htmlFor="fullname">Full Name</label>
                                <input
                                    type="text"
                                    name="fullname"
                                    id="fullname"
                                    placeholder="Spider-Man: Homecoming"
                                    value={username}
                                    onChange={handleUsername}
                                />
                                {errorUser && (
                                    <p className="text-red-500">{errorUser}</p>
                                )}
                                <label for="email">Email</label>
                                <input
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Action, Adventure, Sci-Fi"
                                    value={email}
                                    onChange={handleEmail}
                                />
                                {errorEmail && (
                                    <p className="text-red-500">{errorEmail}</p>
                                )}
                                <label for="telphone">Phone Number</label>
                                <div className="flex gap-2 items-center border-1 border-black rounded-sm px-3">
                                    <p className="border-r-1 border-black px-2">
                                        +62
                                    </p>
                                    <input
                                        type="number"
                                        name="telphone"
                                        id="telphone"
                                        placeholder="Action, Adventure, Sci-Fi"
                                        className="border-none focus:border-none focus:outline-none w-full"
                                        value={phone}
                                        onChange={handlePhone}
                                    />
                                </div>
                                {errorPhone && (
                                    <p className="text-red-500">{errorPhone}</p>
                                )}
                                {successMessage && (
                                    <p className="text-green-500">
                                        {successMessage}
                                    </p>
                                )}
                            </div>
                        </section>
                        <section className="">
                            <h3 className="text-2xl font-bold mb-5">
                                Payment Method
                            </h3>
                            <div className="grid grid-cols-2 gap-7 md:grid-cols-4">
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700 ">
                                    <label htmlFor="gpay">
                                        <img src={Gpay} alt="logo-gpay" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="gpay"
                                        id="gpay"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="gopay">
                                        <img src={Gopay} alt="logo-gopay" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="gopay"
                                        id="gopay"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="bca">
                                        <img src={BCA} alt="logo-bca" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="bca"
                                        id="bca"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="bri">
                                        <img src={BRI} alt="logo-bri" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="bri"
                                        id="bri"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="dana">
                                        <img src={Dana} alt="logo-dana" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="dana"
                                        id="dana"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="paypal">
                                        <img src={Paypal} alt="logo-paypal" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="paypal"
                                        id="paypal"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="visa">
                                        <img src={Visa} alt="logo-visa" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="visa"
                                        id="visa"
                                        className="hidden"
                                    />
                                </div>
                                <div className="border-1 border-gray-400 p-5 rounded-lg hover:bg-blue-700">
                                    <label htmlFor="ovo">
                                        <img src={OVO} alt="logo-ovo" />
                                    </label>
                                    <input
                                        type="radio"
                                        name="ovo"
                                        id="ovo"
                                        className="hidden"
                                    />
                                </div>
                            </div>
                        </section>
                        <button type="submit" className="bg-blue-700 p-2">
                            Pay Now
                        </button>
                    </form>
                </section>
                <section
                    onClick={() => setShowModal(false)} // klik luar modal tutup
                    className={`${
                        showModal ? "flex" : "hidden"
                    } z-10 items-center bg-black/70 text-white p-5 absolute bottom-0 -top-150 w-full justify-center`}
                >
                    <div
                        onClick={(e) => e.stopPropagation()} // klik dalam modal jangan nutup
                        className="z-20 flex flex-col gap-5 bg-white p-5 rounded-lg text-black md:w-[40%] relative"
                    >
                        {/* Tombol close modal */}
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
                        >
                            &times;
                        </button>

                        <h3 className="text-2xl font-bold">Payment info</h3>

                        <div className="flex flex-col gap-5">
                            <p>No. Rekening Virtual</p>
                            <div className="flex justify-between items-center">
                                <p>12321328913829724</p>
                                <div className="flex justify-center border-1 border-blue-700 p-2 items-center gap-2 w-20 rounded-lg">
                                    <p>Copy</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <p>Total Payment</p>
                            <p className="font-bold text-lg text-blue-600">
                                $30
                            </p>
                        </div>

                        <p>
                            Pay this payment bill before it is due, on June 23,
                            2023. If the bill has not been paid by the specified
                            time, it will be forfeited.
                        </p>

                        <button
                            type="button"
                            className="bg-blue-700 p-2 rounded-lg text-white"
                            onClick={() => setShowModal(false)}
                        >
                            <Link to="/movie/resultorder">Cek Pembayaran</Link>
                        </button>

                        <p
                            className="text-center cursor-pointer text-blue-600 hover:underline"
                            onClick={() => setShowModal(false)}
                        >
                            Pay Later
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default Payment;
