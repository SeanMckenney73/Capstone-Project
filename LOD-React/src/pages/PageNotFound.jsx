import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function PageNotFound() {
return (

    


<div className="PageNotFound">

    <NavBar/>

    <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row>
            <Col>

<h1>404</h1>
<h2>OH NO!</h2>
<p>
The Poros are working very hard to fix the page you tried to visit!<br/>
Try going back <Link to="/">home</Link> and visit it later.</p>
<img src='https://www.kindpng.com/picc/m/144-1446956_freetoedit-poro-leagueoflegends-lol-poro-league-of-legends.png'
alt='Poro from league of legends'
width={144}
height={144}/>
            </Col>
        </Row>
    </Container>


<Footer/>
</div>
)
}

export default PageNotFound