// import { Route, Routes } from "react-router-dom";
import { Navigate, useRoutes } from "react-router-dom";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { New } from "../pages/New";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return useRoutes([
        {path:"/", element: <Home />}, 
        {path:"/new", element: <New />}, 
        {path:"/profile", element: <Profile />}, 
        {path:"/details/:id", element: <Details />}, 
        { path: "*", element: <Navigate to={"/"} /> },
    ]
        // <Routes>
        //     <Route path="/" element={<Home />} />
        //     <Route path="/new" element={<New />} />
        //     <Route path="/profile" element={<Profile />} />
        //     <Route path="/details/:id" element={<Details />} />
        // </Routes>
    )
}