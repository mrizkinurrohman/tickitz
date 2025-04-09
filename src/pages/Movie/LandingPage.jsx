import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Picture1 from "../../assets/picture/1.png";
import Picture2 from "../../assets/picture/2.png";
import Picture3 from "../../assets/picture/3.png";
import Picture4 from "../../assets/picture/4.png";
import Shield from "../../assets/svg/shield.svg";
import Ceklis from "../../assets/svg/ceklis.svg";
import File from "../../assets/svg/file.svg";
import DataMovie from "../../components/DataMovie/GetDataMovie.jsx";
import DataMovie2 from "../../components/DataMovie/DataMovieRate.jsx";

function LandingPage() {
    return (
        <>
            <Header />
            <main className="flex flex-col gap-1">
                <section className="flex flex-col gap-5 p-4 md:flex-row px-[10%]">
                    <div className="flex flex-col gap-3 md:justify-around">
                        <div className="flex justify-center md:justify-start ">
                            <p className="text-blue-600 text-center md:text-2xl">
                                MOVIE TICKET PURCHASES #1 IN INDONESIA
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 ">
                            <p className="text-center text-3xl leading-normal md:text-start md:text-4xl ">
                                Experience the Magic of Cinema: Book Your
                                Tickets Today
                            </p>
                        </div>
                        <p className="text-center md:text-start md:text-2xl">
                            Sign up and get the ticket with a lot of discount
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2  ">
                        <div className="flex flex-col gap-2">
                            <img src={Picture1} alt="" className="grid" />
                            <img src={Picture3} alt="" class="three" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <img src={Picture2} alt="" class="two" />
                            <img src={Picture4} alt="" class="four" />
                        </div>
                    </div>
                </section>
                <section className="flex flex-col gap-5 p-4 px-[10%]">
                    <div>
                        <div className="flex flex-col items-center gap-2">
                            <p className="md:text-2xl">WHY CHOOSE US</p>
                            <p>Unleashing the Ultimate Movie Experience</p>
                        </div>
                        <div></div>
                    </div>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-slate-300 rounded-full">
                                    <img
                                        src={Shield}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <p>Guaranteed</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipis
                                elit. Sit enim nec, proin faucibus nibh et
                                sagittis a. Lacinia purus ac amet.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-slate-300 rounded-full">
                                    <img
                                        src={Ceklis}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <p>Affordable</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipis
                                elit. Sit enim nec, proin faucibus nibh et
                                sagittis a. Lacinia purus ac amet.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex flex-col items-center gap-2">
                                <div className="p-3 bg-slate-300 rounded-full">
                                    <img
                                        src={File}
                                        alt=""
                                        width={24}
                                        height={24}
                                    />
                                </div>
                                <div>
                                    <p>24/7 Customer Support</p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipis
                                elit. Sit enim nec, proin faucibus nibh et
                                sagittis a. Lacinia purus ac amet.
                            </p>
                        </div>
                    </div>
                </section>
                <DataMovie />
                <DataMovie2 />
                <section className="p-5 md:px-[10%]">
                    <div className="w-full bg-blue-700 p-5 flex flex-col gap-3 rounded-2xl md:h-90 md:justify-center md:items-center">
                        <p className="text-2xl text-white text-center relative -top-3.5">
                            Subscribe to our newsletter
                        </p>
                        <form
                            action=""
                            className="flex flex-col gap-3 md:flex-row md:justify-center  md:w-3xl"
                        >
                            <label htmlFor=""></label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className=" outline-white border-white text-white md:w-[30%]"
                            />
                            <label for=""></label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className=" outline-white border-white text-white  md:w-[30%]"
                            />
                            <button
                                type="submit"
                                className="bg-white p-2 text-blue-700 font-bold hover:bg-blue-300 md:w-[30%]"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
}

export default LandingPage;
