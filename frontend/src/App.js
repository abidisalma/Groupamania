import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import AddPost from "./pages/AddPost";
import DetailsPost from "./pages/DetailsPost";
import UpdatePost from "./pages/UpdatePost";

function Menu() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/posts/:id" element={<DetailsPost />} />
            <Route path="/posts/update/:id" element={<UpdatePost />} />
        </Routes>
    );
}

export default Menu;