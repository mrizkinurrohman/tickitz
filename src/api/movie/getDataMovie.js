// import { useEffect, useState } from "react";

// const apiKey = "f00aa3cf48820d5799ecb4f8bd369bd3";
// const source = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;

// fucntion getDataMovie() {
//     const [movies, setMovies] = useState([]);

//     const fetchData = async () => {
//         try {
//             const response = await fetch(source);
//             if (!response.ok)
//                 throw new Error(`Response status: ${response.statusText}`);
//             const movieJson = await response.json();
//             setMovies(movieJson.results.slice(0, 4));
//         } catch (error) {
//             if (error instanceof Error) console.log(error.message);
//         }
//     };

//     useEffect(() => {
//         fetchData();
//     }, []);
// }

// export default getDataMovie;
