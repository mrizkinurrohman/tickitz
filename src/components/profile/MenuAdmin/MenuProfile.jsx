import React from "react";

import { Link } from "react-router";

function Menuadmin() {
    return (
        <div>
            <div className=" bg-white flex justify-center p-5 w-full gap-5 md:rounded-2xl md:px-5 md:justify-start">
                <Link to="/profile/editprofile" className="hover:border-b-2 border-blue-500 md:p-5">
                    <h4>Account Settings</h4>
                </Link>
                <Link to="/profile/resultorder" className="hover:border-b-2 border-blue-500 md:p-5">
                    <h4>Order History</h4>
                </Link>
            </div>
        </div>
    );
}

export default Menuadmin;
