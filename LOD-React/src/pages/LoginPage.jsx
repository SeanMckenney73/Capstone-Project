import { useNavigate, Outlet } from "react-router-dom";
import ChampionData from "../components/ChampionData";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { Col, Container, Row } from "react-bootstrap";
import LODJumbotron from "../components/LODJumbotron";
import Register from "../components/Register";
import UpdateProfile from "../components/Updateuser";
import AccountPage from "../components/AccountPage";

export default function LoginPage(){
    
    

    return(
        <div className="LoginPage">
            <NavBar/>

            <LODJumbotron/>

            <Container className="p-5">
                <Row>
                    <Col xs={12} lg={12}>
                        <AccountPage/>
                    </Col>
                </Row>
            </Container>

        <Footer/>
        </div>
    )
}