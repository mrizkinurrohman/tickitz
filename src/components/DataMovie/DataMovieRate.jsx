import { useEffect, useState } from "react";
import Left from "../../assets/svg/arrowwhiteleft.svg";
import Right from "../../assets/svg/arrowwhiteright.svg";
import { Link } from "react-router";

// const apiKey = "f00aa3cf48820d5799ecb4f8bd369bd3";
// const source = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;

const sourceAPI = import.meta.env.VITE_API_URL;
const genreSource = import.meta.env.VITE_API_GENRE;
// console.log(`TEST : ${sourceAPI}`);
// console.log(`TEST2 : ${genreSource}`);

function DataMovieRate() {
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState(new Map());

    useEffect(() => {
        const fetchData = async () => {
            try {
                // fetching data genre
                const responseGenre = await fetch(genreSource);
                // await fetch(
                //     `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
                // );
                if (!responseGenre.ok)
                    throw new Error(
                        `Response status: ${responseGenre.statusText}`
                    );
                const genreJson = await responseGenre.json();
                const genreMap = new Map(
                    genreJson.genres.map((genre) => [genre.id, genre.name])
                );
                setGenres(genreMap);

                // fetching data movie
                const response = await fetch(sourceAPI);
                if (!response.ok)
                    throw new Error(`Response status: ${response.statusText}`);
                const movieJson = await response.json();
                setMovies(movieJson.results.slice(0, 20));
            } catch (error) {
                if (error instanceof Error) console.log(error.message);
            }
        };
        fetchData();
    }, []);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    return (
        <>
            <section className="flex flex-col gap-5 p-5 md:px-[10%]">
                <div className="flex justify-between">
                    <div className="text-center">
                        <p>UPCOMING MOVIES</p>
                        <p>Exciting Movie Coming Soon</p>
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center">
                            <img src={Left} alt="" />
                        </div>
                        <div className="bg-blue-400 w-10 h-10 rounded-full flex justify-center items-center">
                            <img src={Right} alt="" />
                        </div>
                    </div>
                </div>
                <div className="className=overflow-x-scroll overflow-y-hidden flex-nowrap flex gap-4 text-center md:flex-nowrap">
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="flex flex-col gap-2 flex-[1_0_200px] hover:scale-105"
                        >
                            <div className="relative group">
                                <img
                                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                                    alt={movie.title}
                                    className=" object-cover rounded-lg -z-10"
                                    width={300}
                                />
                                <div className="group-hover:bg-black group-hover:opacity-70 inset-0 absolute z-8 flex flex-col justify-center items-center gap-2 rounded-lg p-4 hover:rounded-lg">
                                    <Link to={`/movie/detail/${movie.id}`}>
                                        <button className="p-1 md:p-3 hover:bg-blue-600 opacity-100 border-1 border-white w-40">
                                            Details
                                        </button>
                                    </Link>
                                    <Link to={`/movie/orderseat/${movie.id}`}>
                                        <button className="p-1 md:p-3 hover:bg-blue-600 border-1 border-white w-40">
                                            Buy Ticket
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <h3>{movie.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {movie.genre_ids.map((id) => (
                                        <span
                                            key={id}
                                            className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                                        >
                                            {genres.get(id)}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default DataMovieRate;
