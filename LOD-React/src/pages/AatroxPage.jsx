
import { useNavigate, Outlet } from "react-router-dom";
import ChampionData from "../components/ChampionData";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function AatroxPage(){
    
    

    return(
        <div className="AatroxPage">
            <NavBar/>
        <ChampionData champ='aatrox' nameChampion="Aatrox" champID="1"/>

        <Footer/>
        </div>
    )
}