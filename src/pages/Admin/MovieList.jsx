import React from "react";
import HeaderAdmin2 from "../../components/Header/HeaderAdmin2";
import Table from "../../components/Table/Table";

function MovieList() {
    return (
        <div>
            <HeaderAdmin2 />
            <main className="bg-[#F5F6F8] p-10 md:px-[10%] md:py-10">
                <Table />
            </main>
        </div>
    );
}

export default MovieList;
