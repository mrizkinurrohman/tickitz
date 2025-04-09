import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
// import Header from "./components/Header/Header.jsx";
import LandingPage from "./pages/Movie/LandingPage.jsx";
import "./index.css";
import Home from "./pages/Movie/Home.jsx";
import Details from "./pages/Movie/Details.jsx";
import OrderSeat from "./pages/Order/OrderSeat.jsx";
import Payment from "./pages/Order/Payment.jsx";
import Resultorder from "./pages/Order/Resultorder.jsx";
import EditProfile from "./pages/HomeProfile/EditProfile.jsx";
import NewHistory from "./pages/HomeProfile/NewHistory.jsx";
import ResultProfile from "./pages/HomeProfile/ResultProfile.jsx";
import MovieList from "./pages/Admin/MovieList.jsx";
import AddMovieListAdmin from "./pages/Admin/AddMovie.jsx";
import DashboardGraph from "./pages/Admin/Dashboard.jsx";

// layout auth

//layout movie
// function Layout() {
//     return (
//         <Route>
//             <Header />
//             <Outlet />
//         </Route>
//     );
// }
function Router() {
    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path="auth">
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route path="movie">
                <Route index element={<Home />} />
                <Route path="detail/:id" element={<Details />} />
                <Route path="orderseat/:id" element={<OrderSeat />} />
                <Route path="payment" element={<Payment />} />
                <Route path="resultorder" element={<Resultorder />} />
            </Route>
            <Route path="profile">
                <Route index element={<NewHistory />} />
                <Route path="resultorder" element={<ResultProfile />} />
                <Route path="editprofile" element={<EditProfile />} />
            </Route>
            <Route path="admin">
                <Route index element={<MovieList />} />
                <Route path="addmovielist" element={<AddMovieListAdmin />} />
                <Route path="bisnis" element={<DashboardGraph />} />
            </Route>
        </Routes>
    );
}

export default Router;
