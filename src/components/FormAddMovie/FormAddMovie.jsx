import React from "react";
import IconPlus from "../../assets/svg/plus.svg";
import { Link } from "react-router";
import { useState } from "react";
import { useNavigate } from "react-router";

function FormAddMovie() {
    const [namemovie, setNamemovie] = useState("");
    const [category, setCategory] = useState("");
    const [releasedate, setReleasedate] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");
    const [director, setDirector] = useState("");
    const [cast, setCast] = useState("");
    const [synopsis, setSynopsis] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [errornamemovie, setErrornamemovie] = useState("");
    const [errorcategory, setErrorcategory] = useState("");
    const [errorreleasedate, setErrorreleasedate] = useState("");
    const [errorhour, setErrorhour] = useState("");
    const [errorminute, setErrorminute] = useState("");
    const [errordirector, setErrordirector] = useState("");
    const [errorcast, setErrorcast] = useState("");
    const [errorsynopsis, setErrorsynopsis] = useState("");
    const [errorlocation, setErrorlocation] = useState("");
    const [errordate, setErrordate] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const handleNameMovie = (e) => {
        setNamemovie(e.target.value);
    };

    const handleCategory = (e) => {
        setCategory(e.target.value);
    };

    const handleReleaseDate = (e) => {
        setReleasedate(e.target.value);
    };

    const handleHour = (e) => {
        setHour(e.target.value);
    };

    const handleMinute = (e) => {
        setMinute(e.target.value);
    };

    const handleDirector = (e) => {
        setDirector(e.target.value);
    };

    const handleCast = (e) => {
        setCast(e.target.value);
    };

    const handleSynopsis = (e) => {
        setSynopsis(e.target.value);
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (namemovie === "") {
            setErrornamemovie("Movie name is required");
            setSuccessMessage("");
            return;
        }
        if (category === "") {
            setErrorcategory("Category is required");
            setSuccessMessage("");
            return;
        }
        if (releasedate === "") {
            setErrorreleasedate("Release date is required");
            setSuccessMessage("");
            return;
        }
        if (hour === "") {
            setErrorhour("Hour is required");
            setSuccessMessage("");
            return;
        }
        if (minute === "") {
            setErrorminute("Minute is required");
            setSuccessMessage("");
            return;
        }
        if (director === "") {
            setErrordirector("Director is required");
            setSuccessMessage("");
            return;
        }
        if (cast === "") {
            setErrorcast("Cast is required");
            setSuccessMessage("");
            return;
        }
        if (synopsis === "") {
            setErrorsynopsis("Synopsis is required");
            setSuccessMessage("");
            return;
        }
        if (location === "") {
            setErrorlocation("Location is required");
            setSuccessMessage("");
            return;
        }
        if (date === "") {
            setErrordate("Date is required");
            setSuccessMessage("");
            return;
        }
        setErrornamemovie("");
        setErrorcategory("");
        setErrorreleasedate("");
        setErrorhour("");
        setErrorminute("");
        setErrordirector("");
        setErrorcast("");
        setErrorsynopsis("");
        setErrorlocation("");
        setErrordate("");
        setSuccessMessage("Movie added successfully");
        navigate("/admin");
    };

    return (
        <div>
            <div className="p-5 md:py-10 md:px-15 bg-white rounded-lg">
                <form
                    action="/admin"
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmit}
                >
                    <h3 className="text-2xl font-bold">Add New Movie</h3>
                    <div className="flex flex-col gap-5">
                        <label htmlFor="upload" className="text-gray-400">
                            Upload Image
                        </label>
                        <button
                            type="submit"
                            id="upload"
                            className="bg-blue-700 md:w-30 cursor-pointer"
                        >
                            Upload
                        </button>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label for="movie">Movie Name</label>
                        <input
                            type="text"
                            name="movie"
                            id="movie"
                            placeholder="Spider-Man: Homecoming"
                            className="p-3 rounded-md"
                            value={namemovie}
                            onChange={handleNameMovie}
                        />
                        {errornamemovie && (
                            <p className="text-red-500 font-bold text-sm">
                                {errornamemovie}
                            </p>
                        )}
                        <label for="category">Category</label>
                        <input
                            type="text"
                            name="category"
                            id="category"
                            placeholder="Action, Adventure, Sci-Fi"
                            className="p-3 rounded-md"
                            value={category}
                            onChange={handleCategory}
                        />
                        {errorcategory && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorcategory}
                            </p>
                        )}
                        <div className="flex flex-col gap-3 md:flex-row">
                            <div className="flex flex-col gap-3">
                                <label for="date">Release date</label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="p-3 rounded-md"
                                    value={releasedate}
                                    onChange={handleReleaseDate}
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label>Duration(hour/minute) </label>
                                <div className="flex flex-col gap-5 md:flex-row md:gap-3">
                                    <input
                                        type="number"
                                        name="hour"
                                        id="hour"
                                        placeholder="2"
                                        className="md:w-1/2 p-3 rounded-md"
                                        value={hour}
                                        onChange={handleHour}
                                    />

                                    <input
                                        type="number"
                                        name="minute"
                                        id="minute"
                                        placeholder="30"
                                        className="md:w-1/2 p-3 rounded-md"
                                        value={minute}
                                        onChange={handleMinute}
                                    />
                                </div>
                            </div>
                        </div>
                        {errorreleasedate && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorreleasedate}
                            </p>
                        )}
                        {errorhour && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorhour}
                            </p>
                        )}
                        {errorminute && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorminute}
                            </p>
                        )}
                        <label for="director">Director Name</label>
                        <input
                            type="text"
                            name="director"
                            id="director"
                            placeholder="Jon Watts"
                            className="p-3 rounded-md"
                            value={director}
                            onChange={handleDirector}
                        />
                        {errordirector && (
                            <p className="text-red-500 font-bold text-sm">
                                {errordirector}
                            </p>
                        )}
                        <label for="cast"> Cast</label>
                        <input
                            type="text"
                            name="cast"
                            id="cast"
                            placeholder="Tom Holland, Michael Keaton, Robert Dow.."
                            className="p-3 rounded-md"
                            value={cast}
                            onChange={handleCast}
                        />
                        {errorcast && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorcast}
                            </p>
                        )}
                        <label for="synopsis">Synopsis</label>
                        <textarea
                            name="synopsis"
                            id="synopsis"
                            cols="30"
                            rows="10"
                            placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he
lives with his Aunt May, | "
                            className="border-1 border-black outline-none p-3 rounded-lg"
                            value={synopsis}
                            onChange={handleSynopsis}
                        ></textarea>
                        {errorsynopsis && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorsynopsis}
                            </p>
                        )}
                        <label for="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            id="location"
                            placeholder="Purwokerto, Bandung, Bekasi"
                            className="p-3 rounded-md"
                            value={location}
                            onChange={handleLocation}
                        />
                        {errorlocation && (
                            <p className="text-red-500 font-bold text-sm">
                                {errorlocation}
                            </p>
                        )}
                        <div className="flex flex-col gap-3">
                            <label for="setDate">Set Date & Time</label>
                            <input
                                type="date"
                                id="setDate"
                                name="setDate"
                                className="p-3 rounded-md"
                                value={date}
                                onChange={handleDate}
                            />
                        </div>
                        {errordate && (
                            <p className="text-red-500 font-bold text-sm">
                                {errordate}
                            </p>
                        )}
                        <div className="flex gap-8 items-center">
                            <div className="w-15 h-8 border-1 border-blue-700 rounded-sm flex items-center justify-center">
                                <img src={IconPlus} alt="" />
                            </div>
                            <p>08:30am</p>
                            <p>10:30pm</p>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-700 cursor-pointer"
                        >
                            Save Movie
                        </button>
                    </div>
                    {successMessage && (
                        <p className="text-green-500 font-bold text-sm">
                            {successMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default FormAddMovie;
