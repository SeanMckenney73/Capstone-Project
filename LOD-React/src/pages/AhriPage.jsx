import { useNavigate, Outlet } from "react-router-dom";
import ChampionData from "../components/ChampionData";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AhriPage(){
    
    

    return(
        <div className="AhriPage">
            <NavBar/>
        <ChampionData champ='Ahri' nameChampion="Ahri" champID="2"/>

        <Footer/>
        </div>
    )
}