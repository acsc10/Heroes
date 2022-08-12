import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "../../ui/components"
import { Marvel } from "../pages";
import { Dc } from "../pages";
import { Hero } from "../pages";
import { Search } from "../pages";
export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<Marvel />} />
                <Route path="dc" element={<Dc />} />
                
                <Route path="/" element={ <Navigate to={"/marvel"}/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/hero/:id" element={<Hero/>} />
            </Routes>
            
        </div>
    </>
  )
}
