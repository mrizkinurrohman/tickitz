import React from "react";
import Calender from "../../assets/svg/calendar.svg";
import Spider from "../../assets/picture/spider.png";
import IconEye from "../../assets/svg/eye.svg";
import IconEdit from "../../assets/svg/Edit.svg";
import IconDelete from "../../assets/svg/Delete.svg";
import { Link } from "react-router";

function Table() {
    return (
        <div>
            <section className="">
                <div className="flex flex-col gap-5 md:flex-row md:justify-between md:items-center">
                    <div>
                        <h1 className="font-bold text-lg md:text-2xl">
                            List Movie
                        </h1>
                    </div>
                    <div className="flex flex-col gap-5 md:flex-row md:gap-2">
                        <div className="flex bg-gray-200 w-[345px] md:w-[400px] justify-between items-center p-2">
                            <img
                                src={Calender}
                                alt="CALENDER"
                                id="choose-date"
                            />
                            <label for="choose-date">Choose Date</label>
                            <select name="choose-date" id="choose-date">
                                <option value="date" disabled></option>
                            </select>
                        </div>
                        <button className="bg-blue-700 text-white p-2 rounded-sm md:w-[50%]">
                            <Link to="/admin/addmovielist">Add Movie</Link>
                        </button>
                    </div>
                </div>
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr className="border-b-1 border-gray-600">
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Thumbnails
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Movie Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Released Date
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Duration
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    <img src={Spider} alt="" />
                                </td>
                                <td class="px-6 py-4">Spiderman HomeComing</td>
                                <td class="px-6 py-4"> Action, Adventure</td>
                                <td class="px-6 py-4"> 20/10/2022 </td>
                                <td class="px-6 py-4">1 Hours 15 Minute</td>
                                <td class="px-6 py-4 flex gap-2">
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-blue-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEye} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-purple-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEdit} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-red-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconDelete} alt="" />
                                    </a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    <img src={Spider} alt="" />
                                </td>
                                <td class="px-6 py-4">Spiderman HomeComing</td>
                                <td class="px-6 py-4"> Action, Adventure</td>
                                <td class="px-6 py-4"> 20/10/2022 </td>
                                <td class="px-6 py-4">1 Hours 15 Minute</td>
                                <td class="px-6 py-4 flex gap-2">
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-blue-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEye} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-purple-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEdit} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-red-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconDelete} alt="" />
                                    </a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    <img src={Spider} alt="" />
                                </td>
                                <td class="px-6 py-4">Spiderman HomeComing</td>
                                <td class="px-6 py-4"> Action, Adventure</td>
                                <td class="px-6 py-4"> 20/10/2022 </td>
                                <td class="px-6 py-4">1 Hours 15 Minute</td>
                                <td class="px-6 py-4 flex gap-2">
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-blue-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEye} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-purple-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEdit} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-red-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconDelete} alt="" />
                                    </a>
                                </td>
                            </tr>
                            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                                <td
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    1
                                </td>
                                <td class="px-6 py-4">
                                    <img src={Spider} alt="" />
                                </td>
                                <td class="px-6 py-4">Spiderman HomeComing</td>
                                <td class="px-6 py-4"> Action, Adventure</td>
                                <td class="px-6 py-4"> 20/10/2022 </td>
                                <td class="px-6 py-4">1 Hours 15 Minute</td>
                                <td class="px-6 py-4 flex gap-2">
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-blue-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEye} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-purple-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconEdit} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="flex justify-center items-center font-medium bg-red-600 w-8 h-8 rounded-lg hover:underline"
                                    >
                                        <img src={IconDelete} alt="" />
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-5 justify-center mt-10">
                    <a href="#">&laquo;</a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-blue-600 text-white rounded-full justify-center items-center flex"
                    >
                        1
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-slate-200 text-white rounded-full justify-center items-center flex"
                    >
                        2
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-slate-200 text-white rounded-full justify-center items-center flex"
                    >
                        3
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-slate-200 text-white rounded-full justify-center items-center flex"
                    >
                        4
                    </a>
                    <a
                        href="#"
                        className="w-8 h-8 bg-blue-600 text-white rounded-full justify-center items-center flex"
                    >
                        &raquo;
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Table;
