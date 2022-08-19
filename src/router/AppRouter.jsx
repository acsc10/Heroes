
import { Routes, Route } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { Login } from "../auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
export const AppRouter = () => {
  return (
    <>
      <Routes>
        
       {/*  <Route path="login" element={<Login />} /> */}
       <Route path="/login" element = {
        <PublicRouter>
          <Login/>
        </PublicRouter>
       }/>

        <Route path="/*" element = {
          <PrivateRouter>
              <HeroesRoutes />
          </PrivateRouter>
        } />
        
        
      </Routes>
    </>
    
    
  )
}
