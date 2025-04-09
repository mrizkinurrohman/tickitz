import React from "react";
import HeaderAdmin2 from "../../components/Header/HeaderAdmin2";
import AddMovieList from "../../components/FormAddMovie/FormAddMovie";

function AddMovie() {
    return (
        <div>
            <HeaderAdmin2 />
            <main className="p-10 md:px-[30%] bg-[#F5F6F8]">
                <AddMovieList />
            </main>
        </div>
    );
}

export default AddMovie;
