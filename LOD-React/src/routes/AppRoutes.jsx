import Homepage from "../pages/Homepage"
import AatroxPage from "../pages/AatroxPage"
import AhriPage from "../pages/AhriPage"
import ItemPage from "../pages/ItemPage"
import RunePage from "../pages/RunePage"
import { Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import PageNotFound from "../pages/PageNotFound"



function AppRoutes(props){

    return(
        <Routes>
            <Route index element={<Homepage{...props}/>}/>
            <Route path="/items" element={<ItemPage{...props}/>}/>
            <Route path="/runes" element={<RunePage{...props}/>}/>
            <Route path="login" element={<LoginPage{...props}/>} />
            <Route path="*" element={<PageNotFound />} />


            <Route path="/aatrox" element={<AatroxPage{...props}/>} />
            <Route path="/ahri" element={<AhriPage{...props}/>} />

        </Routes>
    )
}



export default AppRoutes