import Footer from "../../components/Footer/Footer.jsx";
import HeaderHome from "../../components/Header/HeaderHome.jsx";
import Search from "../../assets/svg/search.svg";
import DataMovieUpComing from "../../components/DataMovie/DataMovieUpComing";
function Home() {
    return (
        <>
            <HeaderHome />
            <section className="bg-[url(/hero.png)] h-80 bg-cover bg-center relative -z-10 flex items-center p-5 md:h-[80vh]">
                <div className="absolute inset-0 w-full h-full bg-black opacity-50 -z-5"></div>
                <div className="flex flex-col gap-5 px-[10%] md:w-[80%]">
                    <p className="text-white">LIST MOVIE OF THE WEEK</p>
                    <p className="text-white text-3xl md:text-5xl">
                        Experience the Magic of Cinema: Book Your Tickets Today
                    </p>
                </div>
            </section>
            <section className="p-5 flex flex-col gap-5 md:flex-row md:px-[10%]">
                <div className="flex flex-col gap-2">
                    <label htmlFor="search">Cari Event</label>
                    <div className="flex border-1 border-l border-black rounded-sm  px-5 py-0.5">
                        <img src={Search} alt="Search" />
                        <input
                            type="text"
                            name="search"
                            id="search"
                            className="border-none w-full bg-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Filter</p>
                    <div className="flex flex-wrap gap-0.5 justify-between">
                        <div className="hover:bg-blue-500 hover:text-white hover:outline-1 outline-black p-3 rounded-sm flex justify-center items-center">
                            thiler
                        </div>
                        <div className="hover:bg-blue-500 hover:text-white hover:outline-1 outline-black p-3 rounded-sm flex justify-center items-center">
                            horror
                        </div>
                        <div className="hover:bg-blue-500 hover:text-white hover:outline-1 outline-black p-3 rounded-sm flex justify-center items-center">
                            Romantic
                        </div>
                        <div className="hover:bg-blue-500 hover:text-white hover:outline-1 outline-black p-3 rounded-sm flex justify-center items-center">
                            Adventure
                        </div>
                        <div className="hover:bg-blue-500 hover:text-white hover:outline-1 outline-black p-3 rounded-sm flex justify-center items-center">
                            Sci-fi
                        </div>
                    </div>
                </div>
            </section>
            <DataMovieUpComing />
            <Footer />
        </>
    );
}

export default Home;
