import RuneData from "../components/RuneData";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate, Outlet } from "react-router-dom";



export default function RunePage(){
    
    

    return(
        <div className="RunePage">
            <NavBar/>
                <RuneData/>
            <Footer/>
        </div>
    )
}