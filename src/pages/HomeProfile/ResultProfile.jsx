import React from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin";
import AsideProfile from "../../components/profile/Aside/Aside";
import MenuProfile from "../../components/profile/MenuAdmin/MenuProfile";
import ResultPayment from "../../components/profile/History/ResultPayment.jsx";

function ResultProfile() {
    return (
        <div>
            <HeaderAdmin />
            <main className="p-10 md:px-[10%] md:py-10 bg-[#F5F6F8] md:grid md:grid-cols-[1fr_2.5fr] md:gap-5">
                <div className="hidden md:flex">
                    <AsideProfile />
                </div>
                <div className="flex flex-col gap-5">
                    <MenuProfile />
                    <ResultPayment />
                </div>
            </main>
        </div>
    );
}

export default ResultProfile;
