import React from "react";
import HeaderAdmin from "../../components/Header/HeaderAdmin.jsx";
import AsideProfile from "../../components/profile/Aside/Aside.jsx";
import MenuProfile from "../../components/profile/MenuAdmin/MenuProfile.jsx";
import FormEditProfile from "../../components/profile/SettingsProfile/FormEditProfile.jsx";
// import FormEditPassword from "../../components/profile/SettingsProfile/FormPassword.jsx";
// import ButtonProfile from "../../components/profile/Button/ButtonProfile.jsx";

const ProfileEdit = () => {
    return (
        <div>
            <HeaderAdmin />
            <main className="flex flex-col p-7 gap-30 md:px-[10%] md:py-10 bg-[#F5F6F8] md:grid md:grid-cols-[1fr_2.5fr] md:gap-5">
                <div>
                    <AsideProfile />
                </div>
                <div className="md:flex md:flex-col md:gap-10 ">
                    <div className="hidden md:block">
                        <MenuProfile />
                    </div>
                    <div className="flex flex-col gap-5 rounded-2xl ">
                        <FormEditProfile />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ProfileEdit;
