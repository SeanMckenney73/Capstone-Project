import ItemList from "../components/ItemList";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate, Outlet } from "react-router-dom";



export default function ItemPage(){
    
    

    return(
        <div className="ItemPage">
            <NavBar/>
                <ItemList/>
            <Footer/>
        </div>
    )
}